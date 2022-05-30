const { Review } = require('../models/review');

const reviewdata = [
  {
  id: 1,
  user_id: 1,
  movie_id: 1,
  body: "good movie",
  rating: 4,
  },
  {
    id: 2,
    user_id: 2,
    movie_id: 2,
    body: "good movie",
    rating: 4,
    },
    {
        id: 2,
        user_id: 2,
        movie_id: 2,
        body: "good movie",
        rating: 4,
        },

];

const seedReview = () => Review.bulkCreate(reviewdata);

module.exports = seedReview;
