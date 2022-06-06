# Popcornable

---
## Table of contents
* [Description](#Description)
* [Installation](Installation)
* [Useage](Usage)
* [License](License)
* [Credits](Credits)
* [Questions](Questions)
---
## Description
Popcornable is a full stack web application where users can rate and reveiew movies. Each movie can be selected to view individually where you will see information about the movie, the movie poster, and all reviews of that movie from logged in users. 

---
## Installation
This application uses node.JS and MySql as the two main programs. The packages needed for this application to run are `mysql2`, `sequelize`, `connect-session-sequelize`, `dotenv`, `bcrypt`, `express`, `express-handlebars`, `express-session`, `eslint`, `prettier` and `dayjs`. All these packages and programs will need to be installed once the project has been forked for it to work on your local device. The database will then need to be created using mysql2, by running `source schema.sql` in the terminal inside the `db` folder. The database tables will need to be seeded after that by running `npm run seed` in the command line in the root of the project. 

---
## Usage 
Once presented with the homepage, navigate to either the signup, or login pages depending on whether you are a returning user or not. You can do this by clicking the relevent button in the top right of the screen. 

If you just want to view the reviews of a specific movie, you can type it in to the searchbar and select that movie. Then you will be sent to the movie reviews page where you can view all the reviews of that movie. If you wish to add your own however, you will have to follow the prompts and signup or login.

If you have no preference and just wish to browse, the all movies button will take you to a page showing you all the posters of movies that you can view or review by following the button prompt.



---
## Credits 
This project was completed collaboratively by the users listed as collaborators; [Glenn Digal](https://github.com/gd741), [Robert Sabaruddin](https://github.com/MrRob888), [Alyssa Natividad](https://github.com/alainatividad) and [Andrew Gavegan](https://github.com/AndrewGavegan).

---
## License

MIT 

---
## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---
## Questions
Please also direct questions to: AndrewGavegan, https://github.com/AndrewGavegan and zzandrewzz@optusnet.com.au