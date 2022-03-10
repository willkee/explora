const express = require("express");
const asyncHandler = require("express-async-handler");
// const { restoreUser } = require("../../utils/auth");

const { Upvote, Answer, User } = require("../../db/models");

const router = express.Router();

router.get(
    "/answers/:answerId/upvotes",
    asyncHandler(async (req, res) => {
        const answerId = parseInt(req.params.answerId, 10);
        const upvotes = await Upvote.findAll({
            include: [{ model: User }, { model: Answer }],
            where: { answerId },
        });

        return res.json(upvotes);
    })
);

// router.post(
//     "/answers/:answerId/upvotes",
//     restoreUser,
//     asyncHandler(async (req, res) => {
//         const answerId = parseInt(req.params.answerId, 10);
//         const { answer } = req.body;
//         const { user } = req;

//         const newAnswer = await Answer.create({
//             userId: user.id,
//             questionId,
//             answer,
//         });

//         const createdAnswer = await Answer.findOne({
//             include: [
//                 { model: User },
//                 { model: Question, include: { model: User } },
//             ],
//             where: { id: newAnswer.id },
//         });

//         return res.json(createdAnswer);
//     })
// );

// router.delete(
//     "/upvotes/:upvoteId",
//     asyncHandler(async (req, res) => {
//         const answerId = parseInt(req.params.answerId, 10);
//         const answer = await Answer.findByPk(answerId);

//         if (answer) {
//             const id = answer.id;
//             await Answer.destroy({ where: { id } });
//             return res.json({ id });
//         } else {
//             throw new Error("Answer cannot be found.");
//         }
//     })
// );

module.exports = router;
