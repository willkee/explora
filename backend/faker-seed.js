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

answerSeed(200);
