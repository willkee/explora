"use strict";
module.exports = (sequelize, DataTypes) => {
    const Upvote = sequelize.define(
        "Upvote",
        {
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                },
            },
            answerId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                },
            },
        },
        {}
    );
    Upvote.associate = function (models) {
        Upvote.belongsTo(models.User, { foreignKey: "userId" });
        Upvote.belongsTo(models.Answer, {
            foreignKey: "answerId",
            onDelete: "CASCADE",
            hooks: true,
        });
    };
    return Upvote;
};
