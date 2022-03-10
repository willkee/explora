"use strict";
module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define(
        "Answer",
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isInt: true,
                },
            },
            questionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isInt: true,
                },
            },
            answer: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    min: 1,
                },
            },
        },
        {}
    );
    Answer.associate = function (models) {
        Answer.belongsTo(models.Question, { foreignKey: "questionId" });
        Answer.belongsTo(models.User, { foreignKey: "userId" });
        Answer.hasMany(models.Upvote, { foreignKey: "answerId" });
    };
    return Answer;
};
