# Popcornable

## Table of contents
* [Description](#Description)
* [Website](#Website)
* [Installation](Installation)
* [Usage](Usage)
* [License](License)
* [Credits](Credits)
* [Questions](Questions)
---

## Description

Popcornable is a full stack web application where users can rate and review movies. Each movie can be selected to be viewes individually where you will see information about the movie, the movie poster, and all reviews of that movie from logged in users. 

This application uses node.JS and MySql as the two main programs. The packages needed for this application to run are `mysql2`, `sequelize`, `connect-session-sequelize`, `dotenv`, `bcrypt`, `express`, `express-handlebars`, `express-session`, `eslint`, `prettier` and `dayjs`. 

---

## Website

Visit [this](https://.herokuapp.com/) to see the application in action.

---


## Installation

After forking the project into your local computer, run the following to install all of the packages used in this program:

```
npm install
```

Create a copy of the .env.EXAMPLE file, fill out the username and password of your MySQL database and save the file into .env

The database will then need to be created using mysql2 by running the following code: 

```
mysql -u root -p
source ./db/schema.sql
```

After that, the database tables will need to be seeded by running 

```
npm run seed
```

---

## Usage 

To run the program, run the code below:

```
npm start
```

Open a new tab and go to [http://localhost:3001](http://localhost:3001)

Once presented with the homepage, navigate to either the signup, or login pages depending on whether you are a returning user or not. You can do this by clicking the relevant button in the top right of the screen. 

If you just want to view the reviews of a specific movie, you can type it in to the searchbar and select that movie. Then you will be sent to the movie reviews page where you can view all the reviews of that movie. If you wish to add your own however, you will have to follow the prompts and signup or login.

If you have no preference and just wish to browse, the all movies button will take you to a page showing you all the posters of movies that you can view or review by following the button prompt.


---
## Credits 

This project was completed collaboratively by the users listed as collaborators; [Glenn Digal](https://github.com/gd741), [Robert Sabaruddin](https://github.com/MrRob888), [Alyssa Natividad](https://github.com/alainatividad) and [Andrew Gavegan](https://github.com/AndrewGavegan).

The Star Rating is by [Ignacio Chavez](https://github.com/nashio/star-rating-svg)

---

## License

MIT 

---
## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---
## Questions
Please also direct questions to: AndrewGavegan, https://github.com/AndrewGavegan and zzandrewzz@optusnet.com.au