const router = require('express').Router();
const { Movie, Review } = require('../models');

router.get('/', async (req, res) => {
  try {
    // get all reviews JOIN movie, group by movie id so that the movie only shows up once in the frontpage
    const reviewData = await Review.findAll({
      include: [{
        model: Movie
      }],
      group: ['movie_id']
    });

    const reviews = reviewData.map((post) => post.get({ plain: true }));

    const movieData = await Movie.findAll({
      attributes: ['name', 'id'],
    });

    const movies = movieData.map((post) => post.get({ plain: true }));

    // render homepage (and partial homeposts)
    res.render('homepage', {
      reviews,
      movies,
      userId: req.session.user_id,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// render login handlebars
router.get('/login', async (req, res) => {
  res.render('login');
});

// render signup handlebars
router.get('/signup', async (req, res) => {
  res.render('signup');
});

module.exports = router;