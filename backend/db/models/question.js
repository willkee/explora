"use strict";
module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define(
        "Question",
        {
            ownerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isInt: true,
                },
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 255],
                },
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {}
    );
    Question.associate = function (models) {
        Question.belongsTo(models.User, { foreignKey: "ownerId" });
    };
    return Question;
};
