"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Users",
            [
                {
                    email: "demo.user@demo.com",
                    username: "Demo",
                    hashedPassword: bcrypt.hashSync("demopassword"),
                },
                {
                    email: "john.smith@gmail.com",
                    username: "John",
                    hashedPassword: bcrypt.hashSync("password1"),
                },
                {
                    email: "jane.doe@aol.com",
                    username: "Jane",
                    hashedPassword: bcrypt.hashSync("password2"),
                },
                {
                    email: "abe.lincoln@whitehouse.gov",
                    username: "Lincoln",
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
