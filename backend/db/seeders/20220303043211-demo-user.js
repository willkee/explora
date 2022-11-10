"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
}

module.exports = {
	up: (queryInterface, Sequelize) => {
		options.tableName = "Users";
		return queryInterface.bulkInsert(
			options,
			[
				{
					email: "demo.user@demo.com",
					username: "Demo",
					hashedPassword: bcrypt.hashSync("demopassword"),
					createdAt: "Tue Mar 09 2021",
					updatedAt: "Fri Jan 14 2022",
				},
				{
					email: "john.smith@gmail.com",
					username: "John",
					hashedPassword: bcrypt.hashSync("password1"),
					createdAt: "Fri Feb 05 2021",
					updatedAt: "Tue Jan 04 2022",
				},
				{
					email: "jane.doe@aol.com",
					username: "Jane",
					hashedPassword: bcrypt.hashSync("password2"),
					createdAt: "Sun Nov 15 2020",
					updatedAt: "Fri Feb 18 2022",
				},
				{
					email: "abe.lincoln@whitehouse.gov",
					username: "Lincoln",
					hashedPassword: bcrypt.hashSync("president"),
					createdAt: "Wed Sep 16 2020",
					updatedAt: "Tue Feb 15 2022",
				},
				{
					email: "Nico.Grimes71@hotmail.com",
					username: "Florence.Kuvalis",
					hashedPassword:
						"$2a$10$RXZiL4JXpF9pJml5TJN5P.T8afyD3iT3vTkH.s.ll0DVoLVhSSpOS",
					createdAt: "Sun Apr 25 2021",
					updatedAt: "Tue Jun 29 2021",
				},
				{
					email: "Harold_Nitzsche@yahoo.com",
					username: "Myrtie_Cormier",
					hashedPassword:
						"$2a$10$MK38mNNGZ6.Di7YSlKt2/uVoMtdytoVkmrRJV5oSpnYi3PECpDhW.",
					createdAt: "Sun Oct 03 2021",
					updatedAt: "Sun Jan 16 2022",
				},
				{
					email: "Lera53@gmail.com",
					username: "Floyd_Muller",
					hashedPassword:
						"$2a$10$tIQ8W1lIh/GDnyr2iR.BA.uUuWm7ucyTxjP.QGfYR5ywufBBuQ9Di",
					createdAt: "Mon Sep 07 2020",
					updatedAt: "Tue Mar 01 2022",
				},
				{
					email: "Sebastian_Blanda29@yahoo.com",
					username: "Aric_Reinger84",
					hashedPassword:
						"$2a$10$aQDe8Qx6ErewUTpvR1J1duCuEBd9yTdV2vXvDg4/XTJpiIy4qY47q",
					createdAt: "Tue Sep 08 2020",
					updatedAt: "Thu Jan 20 2022",
				},
				{
					email: "Eugene_Schmitt42@hotmail.com",
					username: "Belle_Crist72",
					hashedPassword:
						"$2a$10$TnYSMUnH.6iner98AXBfH.H18isYgzpeIZHUbymN8xvmz8cH3NoNS",
					createdAt: "Wed Jul 28 2021",
					updatedAt: "Sun Feb 13 2022",
				},
				{
					email: "Chesley82@gmail.com",
					username: "Viola.Heathcote",
					hashedPassword:
						"$2a$10$t/ws36XgmCaO/LtQ28kaKeeykLi5VrMECEZ.81hwZrVHoZpcdC5H6",
					createdAt: "Sat Oct 17 2020",
					updatedAt: "Thu Feb 10 2022",
				},
				{
					email: "Grant_Stehr@hotmail.com",
					username: "Edmund40",
					hashedPassword:
						"$2a$10$CUpb4wfAtjS9wwYpH/N.DeqpY6Gr3KwEKN3P.G8mEyonE86H0QelG",
					createdAt: "Mon May 03 2021",
					updatedAt: "Sat Mar 05 2022",
				},
				{
					email: "Charity.Kuhlman@gmail.com",
					username: "Kareem75",
					hashedPassword:
						"$2a$10$0iRhcDqMznfZsDjUBGDF8emQPozl01U8DcxiN0X6weJQXQ6hfizdy",
					createdAt: "Wed Feb 17 2021",
					updatedAt: "Fri Jan 07 2022",
				},
				{
					email: "Courtney26@hotmail.com",
					username: "Fred_Stracke26",
					hashedPassword:
						"$2a$10$yTb8CrRIKZU/q588qTZjxuZrbEFe.EiMupJahy32SGhfEHxY6VND6",
					createdAt: "Thu Jan 07 2021",
					updatedAt: "Sun Mar 06 2022",
				},
				{
					email: "Sister_Durgan17@hotmail.com",
					username: "Chelsey.DuBuque49",
					hashedPassword:
						"$2a$10$340gwbRt2mklmYg00xqi6ut5KGn5B25YIoBLYdOnUs1.p2OH/l30i",
					createdAt: "Sat Sep 11 2021",
					updatedAt: "Sat Jan 29 2022",
				},
				{
					email: "Ray3@hotmail.com",
					username: "Cara.Heidenreich76",
					hashedPassword:
						"$2a$10$eXFtGmTDKIBGpG2i8Mo7GuJpEnjRCG0O73YZXOfsG7OqDv86FiC7e",
					createdAt: "Fri Jan 03 2020",
					updatedAt: "Sat Jan 15 2022",
				},
				{
					email: "Camylle_Olson80@hotmail.com",
					username: "Hollis_Bernhard",
					hashedPassword:
						"$2a$10$N2Pyt0sqB6pQdvLOm8VJ7uE3Me1KkuyBysdllAZpbkhMxFRtPlQ2O",
					createdAt: "Wed May 13 2020",
					updatedAt: "Sat Jan 22 2022",
				},
				{
					email: "Chadd.Harris@yahoo.com",
					username: "Claude_Cruickshank",
					hashedPassword:
						"$2a$10$q4gclF/gsnslgwKBzDfQ8eciNzviLqO9YSUi7G7zauwWbM0KjBjgC",
					createdAt: "Wed Jun 10 2020",
					updatedAt: "Thu Feb 24 2022",
				},
				{
					email: "Kristofer12@hotmail.com",
					username: "Reece_Marvin59",
					hashedPassword:
						"$2a$10$3YB4fE1CPeBO9zQ5U.Xl9uoCXskUY0/JsbU7GjGVVLqJxwcLLYp9e",
					createdAt: "Thu Mar 11 2021",
					updatedAt: "Tue Feb 08 2022",
				},
				{
					email: "Clarabelle80@hotmail.com",
					username: "Tillman_Crona",
					hashedPassword:
						"$2a$10$d7hlSMXWrVb9OymPdHGgvOUV3flFgDw3cmteB9hTW93CIFhqVC6gS",
					createdAt: "Fri Apr 16 2021",
					updatedAt: "Sun Jan 30 2022",
				},
				{
					email: "Lacey.Torphy@gmail.com",
					username: "Mariano_Stark47",
					hashedPassword:
						"$2a$10$HX8V6.W5eR2Vs3wKHn2hEuWJNEPq5MLB5R.E7wEigv/Mc694uQJI2",
					createdAt: "Wed Aug 12 2020",
					updatedAt: "Fri Jan 21 2022",
				},
				{
					email: "Tressa.Johnson1@yahoo.com",
					username: "Josiah17",
					hashedPassword:
						"$2a$10$nPVWb7ZUJLSRe1rR748ap.iMfiOFyuoBf/vuisIQiPqFEFYKQbOK6",
					createdAt: "Sat Jun 19 2021",
					updatedAt: "Wed Jan 19 2022",
				},
				{
					email: "Floyd.Padberg91@gmail.com",
					username: "Zella82",
					hashedPassword:
						"$2a$10$0o5eF1dPMGnp3.fMKjtoseZi5eGTFGh8A0eAFHFrbTv65.LeJTcZm",
					createdAt: "Mon Dec 27 2021",
					updatedAt: "Wed Jan 19 2022",
				},
				{
					email: "Nicola.Wunsch@hotmail.com",
					username: "Myrna82",
					hashedPassword:
						"$2a$10$2nGQyAulKmhZeTxoKJwVM.twgkMjKF0ny2aIb1gvNlR4MhHdU/Rl6",
					createdAt: "Thu Oct 28 2021",
					updatedAt: "Fri Mar 04 2022",
				},
				{
					email: "Forrest_Bode8@yahoo.com",
					username: "Skylar.Powlowski",
					hashedPassword:
						"$2a$10$mrfIi4GRV0F5aXwJZSXPnuhA6OqD0RXr3NuwEiSxdma/CZ2Uq8lwi",
					createdAt: "Tue Sep 08 2020",
					updatedAt: "Mon Jan 17 2022",
				},
				{
					email: "Janis.Nienow8@yahoo.com",
					username: "Eryn.Veum",
					hashedPassword:
						"$2a$10$D4etw9aqBKsLzuGqdA5gCe2H14Zimg8fcKGeTnUaHrBByOSxBzFF6",
					createdAt: "Mon Dec 06 2021",
					updatedAt: "Thu Feb 03 2022",
				},
				{
					email: "Mariano.Kris13@gmail.com",
					username: "Kenny_Shanahan10",
					hashedPassword:
						"$2a$10$4qFpKcr8oUVP9Alj1hmPE.ZUwXauLcmqUHGPCXR0QLD3I4OFXQKdm",
					createdAt: "Mon Sep 07 2020",
					updatedAt: "Thu Feb 03 2022",
				},
				{
					email: "Nicholas.Miller@gmail.com",
					username: "Edmund_Kutch",
					hashedPassword:
						"$2a$10$BdHYKUzTMHJehfj5ZVpa/uzz85TdsDPSQcxIARKMOlUj3BGKeLew2",
					createdAt: "Tue Feb 02 2021",
					updatedAt: "Sat Feb 26 2022",
				},
				{
					email: "Flavie_Kuhic@gmail.com",
					username: "Julio71",
					hashedPassword:
						"$2a$10$329C8yKkK.tKuAI95/f5g.rAwUAfGSk7PaLfJXSsxykKm2FM.H9Qa",
					createdAt: "Fri Jul 02 2021",
					updatedAt: "Mon Feb 14 2022",
				},
				{
					email: "Carmel_Barrows5@hotmail.com",
					username: "Oliver24",
					hashedPassword:
						"$2a$10$iroufvU1/BU6XdddyFhmuu/Okn./lfLb79HGsFt5.M0CZep1CM03C",
					createdAt: "Fri Jun 19 2020",
					updatedAt: "Thu Feb 17 2022",
				},
				{
					email: "Itzel_Stracke27@hotmail.com",
					username: "Jackeline_Powlowski92",
					hashedPassword:
						"$2a$10$ckl.PUtJnC0omyT7AJ8VOuTYrz6DzWiET/ONIYEinZqt3OpU2GuPu",
					createdAt: "Mon Oct 05 2020",
					updatedAt: "Wed Feb 02 2022",
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		options.tableName = "Users";
		return queryInterface.bulkDelete(
			options,
			{
				username: { [Op.in]: ["john-smith", "jane-doe", "lincoln"] },
			},
			{}
		);
	},
};
