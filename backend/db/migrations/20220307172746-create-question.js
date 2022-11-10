"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"Questions",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				ownerId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Users" },
				},
				title: {
					allowNull: false,
					type: Sequelize.STRING(255),
				},
				description: {
					allowNull: false,
					type: Sequelize.TEXT,
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
		return queryInterface.dropTable("Questions", options);
	},
};
