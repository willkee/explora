const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

const userSeed = (num) => {
	let i = 0;

	while (i < num) {
		const user = {
			email: faker.internet.email(),
			username: faker.internet.userName(),
			hashedPassword: bcrypt.hashSync(faker.internet.password()),
			createdAt: faker.date
				.between("2020-01-01", "2021-12-31")
				.toDateString(),
			updatedAt: faker.date
				.between("2022-01-01", "2022-03-07")
				.toDateString(),
		};

		console.log(user, ",");
		i++;
	}
};

// userSeed(4);

function randomNum(max) {
	return Math.ceil(Math.random() * max);
}
const questionSeed = (num) => {
	let i = 0;

	while (i < num) {
		const id = randomNum(30);
		const question = {
			ownerId: id,
			title: faker.lorem.sentence(),
			description: faker.lorem.paragraph(),
			createdAt: faker.date
				.between("2020-01-01", "2021-12-31")
				.toDateString(),
			updatedAt: faker.date
				.between("2022-01-01", "2022-03-07")
				.toDateString(),
		};
		console.log(question, ",");
		i++;
	}
};

// questionSeed(100);
// console.log(randomNum(28));

const answerSeed = (num) => {
	let i = 0;

	while (i < num) {
		const qid = randomNum(200);
		const uid = randomNum(30);
		const fDate = faker.date
			.between("2021-05-01", "2021-12-31")
			.toDateString();

		const answer = {
			userId: uid,
			questionId: qid,
			answer: faker.lorem.paragraph(),
			createdAt: fDate,
			updatedAt: fDate,
		};
		console.log(answer, ",");
		i++;
	}
};

// answerSeed(200);

const votePairs = [];
const upvoteSeed = (num) => {
	let i = 0;

	while (i < num) {
		const userId = randomNum(30);
		const answerId = randomNum(400);
		const duplicate = votePairs.find(
			(vote) => vote.answerId === answerId && vote.userId === userId
		);
		if (duplicate) {
			continue;
		}
		const votes = {
			userId,
			answerId,
			createdAt: "new Date()",
			updatedAt: "new Date()",
		};
		console.log(votes, ",");
		votePairs.push(votes);
		i++;
	}
};

// upvoteSeed(500);
function randomNum(max) {
	return Math.ceil(Math.random() * max);
}

const ownerNum = (num) => {
	i = 0;
	while (i < num) {
		console.log(randomNum(25));
		i++;
	}
};
// ownerNum(91);

// const phoneGenerator = (num) => {
// 	i = 0;

// 	while (i < num) {
// 		const mid3 = 111 + randomNum(888);
// 		const last4 = 1000 + randomNum(8999);
// 		const phoneNum = `212-${mid3}-${last4}`;
// 		console.log(phoneNum);
// 		i++;
// 	}
// };
// phoneGenerator(100);

const userFaker = (num) => {
	i = 0;

	while (i < num) {
		const obj = {};
		date = faker.date.between("2020-01-01", "2021-12-31").toDateString();
		obj.first_name = faker.name.firstName();
		obj.last_name = faker.name.lastName();
		obj.email = faker.internet.email();
		obj.hashed_password = bcrypt.hashSync(faker.internet.password());
		obj.business_owner = "False";
		obj.created_at = date;
		obj.updated_at = date;
		console.log(obj);
		i++;
	}
};

const otherFaker = (num) => {
	i = 0;

	while (i < num) {
		const obj = {};
		date = faker.date.between("2022-01-01", "2022-04-01").toDateString();
		obj.type = "";
		obj.created_at = date;
		obj.updated_at = date;
		console.log(obj);
		i++;
	}
};

// otherFaker(20);
console.log(bcrypt.hashSync("password"));
