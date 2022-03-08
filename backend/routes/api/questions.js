const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { restoreUser } = require("../../utils/auth");

const { Question, Answer, User, Sequelize } = require("../../db/models");

const router = express.Router();

const validateQuestion = [
    check("title")
        .exists({ checkFalsy: true })
        .withMessage("Please enter a title.")
        .isLength({ min: 3, max: 255 })
        .withMessage("Please enter a title between 3 and 255 characters."),
    handleValidationErrors,
];

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const questions = await Question.findAll({
            include: [{ model: Answer }, { model: User }],
            limit: 40,
            order: [["title", "ASC"]],
        });
        return res.json({ questions });
    })
);

router.post(
    "/",
    restoreUser,
    validateQuestion,
    asyncHandler(async (req, res) => {
        const { title, description } = req.body;
        const { user } = req;

        const questionX = await Question.create({
            ownerId: user.id,
            title,
            description,
        });
        const newQuestion = await Question.findOne({
            include: [{ model: Answer }, { model: User }],
            where: { id: questionX.id },
        });

        return res.json(newQuestion);
    })
);

router.get(
    "/:questionId",
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.questionId, 10);

        const selectedQuestion = await Question.findOne({
            include: [
                { model: User },
                { model: Answer, include: { model: User } },
            ],
            where: { id: questionId },
        });
        return res.json(selectedQuestion);
    })
);

router.put(
    "/:questionId",
    asyncHandler(async (req, res) => {
        const { title, description } = req.body;
        const questionId = parseInt(req.params.questionId, 10);

        const selectedQuestion = await Question.findOne({
            where: { id: questionId },
        });

        try {
            if (selectedQuestion) {
                selectedQuestion.title = title;
                selectedQuestion.description = description;
                return res.json(selectedQuestion);
            }
        } catch (err) {
            console.log("Error - Question Not Found: ", err);
        }
    })
);

router.delete(
    "/:questionId",
    asyncHandler(async (req, res) => {})
);

module.exports = router;
