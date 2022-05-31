const { Review } = require('../models/');

const reviewdata = [
  {  
    user_id: 1,
    movie_id: 1,
    body: 'good movie',
    rating: 4,
  },
  {
    user_id: 2,
    movie_id: 1,
    body: 'ok movie',
    rating: 3,
  },
  {
    user_id: 2,
    movie_id: 3,
    body: 'great movie',
    rating: 5,
  },
  {
    user_id: 3,
    movie_id: 3,
    body: 'good movie',
    rating: 4,
  },
  {
    user_id: 4,
    movie_id: 2,
    body: 'ok movie',
    rating: 3,
  },
  {
    user_id: 5,
    movie_id: 2,
    body: 'great movie',
    rating: 5,
  },
  {
    user_id: 3,
    movie_id: 2,
    body: 'good movie',
    rating: 4,
  }

];

const seedReview = () => Review.bulkCreate(reviewdata);

module.exports = seedReview;
