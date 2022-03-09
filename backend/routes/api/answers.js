const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { restoreUser } = require("../../utils/auth");

const { Question, Answer, User } = require("../../db/models");

const router = express.Router();

const validateAnswer = [
    check("answer")
        .exists({ checkFalsy: true })
        .withMessage("Please enter a value for your answer."),
    handleValidationErrors,
];

router.get(
    "/questions/:questionId/answers",
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.questionId, 10);
        const answers = await Answer.findAll({
            include: [
                { model: User },
                { model: Question, include: { model: User } },
            ],
            where: { questionId },
            order: [["id"]],
        });

        return res.json(answers);
    })
);

router.post(
    "/questions/:questionId/answers",
    restoreUser,
    validateAnswer,
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.questionId, 10);
        const { answer } = req.body;
        const { user } = req;

        const newAnswer = await Answer.create({
            userId: user.id,
            questionId,
            answer,
        });

        const createdAnswer = await Answer.findOne({
            include: [
                { model: User },
                { model: Question, include: { model: User } },
            ],
            where: { id: newAnswer.id },
        });

        return res.json(createdAnswer);
    })
);

router.delete(
    "/answers/:answerId",
    asyncHandler(async (req, res) => {
        const answerId = parseInt(req.params.answerId, 10);
        const answer = await Answer.findByPk(answerId);

        if (answer) {
            const id = answer.id;
            await Answer.destroy({ where: { id } });
            return res.json({ id });
        } else {
            throw new Error("Answer cannot be found.");
        }
    })
);

module.exports = router;
