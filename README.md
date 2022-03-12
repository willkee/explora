<img src="./frontend/public/images/explora-logo-new.svg" style="width:200px;" />

<br>

---

<br>

## Explora: Table of Contents

-   [Link to Live Site](https://github.com/willkee/explora/edit/main/README.md#link-to-live-site)
-   [Description](https://github.com/willkee/explora/edit/main/README.md#description)
-   [Technologies](https://github.com/willkee/explora/edit/main/README.md#technologies)
-   [Features](https://github.com/willkee/explora/edit/main/README.md#features)
-   [Wireframes](https://github.com/willkee/explora/edit/main/README.md#wireframes)
    <br>

<br>

---

<br>

## Link to Live Site

-   [Explora Live Site](https://explora-quora-clone.herokuapp.com/)

<br>

---

<br>

## Description

Explora is a Quora clone where users can ask the community questions related to travel to various destinations.

<br>

---

<br>

## Technologies

<br>
<p float="left">

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" style="width:75px;" />

</p>

<br>

---

<br>

## Getting Started

<br>

1.  Clone this repository:

            git clone git@github.com:willkee/explora.git

    <br>

2.  Install dependencies from the root directory.

            npm install

    <br>

3.  Create a user on PostgreSQL (psql) with a `PASSWORD` and `CREATEDB` privileges. Remember to include the semicolon `;` at the end of the line.

        CREATE USER <username> WITH PASSWORD <password> CREATEDB;

    <br>

4.  In the backend directory, create a `.env` file based on the `.env.example` file also found in the backend directory.
    <br>

5.  Enter your chosen username and password into the respective fields in the `.env` file you just created. Enter your chosen database **name** and `PORT`. You may enter a secure combination of characters into `JWT_SECRET` or use the following in `node` in your terminal to generate a secure string.

        require("crypto").randomBytes(32).toString("hex")

    <br>

6.  Add a numeric value to `JWT_EXPIRES_IN`. By default, you may use `604800` which is the number of seconds in a week.

<br>

7.  Add the following proxy code to your package.json file in the `frontend` directory. If you chose any port other than `5000`, replace the port number there now.

        "proxy": "http://localhost:5000"

    <br>

8.  Run the following code in your backend directory to run the creation of the database and migrations as well as to seed the database.

        npx dotenv sequelize db:create
        npx dotenv sequelize db:migrate
        npx dotenv sequelize db:seed:all

    <br>

9.  Start the backend and frontend servers in the backend and frontend directories, respectively. After starting the frontend server, your browser should open the application automatically. If not, navigate to `http://localhost:3000`

        npm start

    <br>

10. You may use the demo user or sign up as a new user to take advantage of the features of the application.

<br>

---

<br>

## Features

-   The home page displays the most recent questions on the site
-   Users can post questions
-   Users can post answers to existing questions (but not to their own questions)
-   Users can upvote answers to questions (but not to their own answers)
-   Unauthenticated users can view all questions and answers

<br>

---

<br>

## Error Handling

<img src="./frontend/public/screenshots/username-unique.png" style="width:400px;" />
<img src="./frontend/public/screenshots/username-not-email.png" style="width:400px;" />
<img src="./frontend/public/screenshots/password-6-or-more.png" style="width:400px;" />
<img src="./frontend/public/screenshots/confirm-pw-match.png" style="width:400px;" />
<img src="./frontend/public/screenshots/error-signup.png" style="width:400px;" />
<img src="./frontend/public/screenshots/error-login.png" style="width:400px;" />
<img src="./frontend/public/screenshots/error-add-question.png" style="width:400px;" />
<img src="./frontend/public/screenshots/error-add-answer.png" style="width:400px;" />

<br>

---

<br>

## Wireframes

<img src="./frontend/public/wireframes/wireframe-landing.png" style="width:800px;" />
<img src="./frontend/public/wireframes/signup-modal-2.png" style="width:800px;" />
<img src="./frontend/public/wireframes/login-modal.png" style="width:800px;" />
<img src="./frontend/public/wireframes/wireframe-loggedin.png" style="width:800px;" />
<img src="./frontend/public/wireframes/question-not-owner-2.png" style="width:800px;" />
<img src="./frontend/public/wireframes/question-owner-2.png" style="width:800px;" />
<img src="./frontend/public/wireframes/add-question-2.png" style="width:800px;" />
<img src="./frontend/public/wireframes/edit-question-2.png" style="width:800px;" />

<br>

---

<br>
