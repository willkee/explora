"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"Upvotes",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				userId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Users" },
				},
				answerId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Answers" },
					onDelete: "CASCADE",
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			},
			options
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Upvotes", options);
	},
};
