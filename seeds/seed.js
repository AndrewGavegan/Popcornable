const seedReviews = require('./review');
const seedMovies = require('./movie');
const seedUsers = require('./user');
const sequelize = require('../config/connection');

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log('\n--- DB SYCNED ---\n');

  await seedUsers();
  console.log('\n--- USER SYCNED ---\n');

  await seedMovies();
  console.log('\n--- MOVIE SYCNED ---\n');

  await seedReviews();
  console.log('\n--- REVIEW SYCNED ---\n');

  process.exit(0);
};

seed();