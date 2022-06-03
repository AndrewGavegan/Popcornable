const { User } = require('../models');

const data = [
  {
    name: 'John_Smith',
    email: 'J_Smith@hotmail.com',
    password: 'password123'
  },
  {
    name: 'Sally_Stevens',
    email: 'S_Stevens@hotmail.com',
    password: 'password123'
  },
  {
    name: 'Bianca_Brown',
    email: 'B_Brown@hotmail.com',
    password: 'password123'
  },
  {
    name: 'Katy_Kevins',
    email: 'K_Kevins@hotmail.com',
    password: 'password123'
  },
  {
    name: 'Liam_Lion',
    email: 'L_Lion@hotmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(data);
module.exports = seedUsers;