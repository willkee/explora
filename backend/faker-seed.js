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

questionSeed(100);

// console.log(randomNum(28));
