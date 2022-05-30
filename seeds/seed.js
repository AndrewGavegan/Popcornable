const sequelize = require('../config/connection');
// import our models
import movie from 
// const { User, movieReview } = require('../models');

// STARTER CODE FROM MINI PROJECT, REVIEW AGAINST MODELS WHEN CREATED
const movieReviewsData = require('./movieReviewsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const movieReview of movieReviewsData) {
    await movieReview.create({
      ...movieReview,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
