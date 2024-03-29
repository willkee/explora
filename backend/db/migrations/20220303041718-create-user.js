"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"Users",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				username: {
					unique: true,
					allowNull: false,
					type: Sequelize.STRING(30),
				},
				email: {
					unique: true,
					allowNull: false,
					type: Sequelize.STRING(256),
				},
				hashedPassword: {
					allowNull: false,
					type: Sequelize.STRING.BINARY,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: Sequelize.fn("now"),
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: Sequelize.fn("now"),
				},
			},
			options
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Users", options);
	},
};
