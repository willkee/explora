"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Users",
            [
                {
                    email: "john.smith@gmail.com",
                    username: "john-smith",
                    hashedPassword: bcrypt.hashSync("password1"),
                },
                {
                    email: "jane.doe@aol.com",
                    username: "jane-doe",
                    hashedPassword: bcrypt.hashSync("password2"),
                },
                {
                    email: "abe.lincoln@whitehouse.gov",
                    username: "lincoln",
                    hashedPassword: bcrypt.hashSync("president"),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            "Users",
            {
                username: { [Op.in]: ["john-smith", "jane-doe", "lincoln"] },
            },
            {}
        );
    },
};
