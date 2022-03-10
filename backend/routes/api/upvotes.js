const express = require("express");
const asyncHandler = require("express-async-handler");
const { restoreUser } = require("../../utils/auth");

const { Upvote, Answer, User } = require("../../db/models");

const router = express.Router();

router.get(
    "/answers/:answerId/upvotes",
    asyncHandler(async (req, res) => {
        const answerId = parseInt(req.params.answerId, 10);
        const upvotes = await Upvote.findAll({ where: { answerId } });

        return res.json(upvotes);
    })
);

router.post(
    "/answers/:answerId/upvotes",
    restoreUser,
    asyncHandler(async (req, res) => {
        const answerId = parseInt(req.params.answerId, 10);
        const { user } = req;

        const upVote = await Upvote.create({
            userId: user.id,
            answerId,
        });

        const createdVote = await Upvote.findOne({
            where: { id: upVote.id },
        });

        return res.json(createdVote);
    })
);

router.delete(
    "/upvotes/:upvoteId",
    asyncHandler(async (req, res) => {
        const upvoteId = parseInt(req.params.answerId, 10);
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
