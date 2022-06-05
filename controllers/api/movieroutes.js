const router = require('express').Router();
const { Movie, Review, User } = require('../../models');

// find all movies
router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      attributes: ['name', 'image_url'],
      order: [
        ['name', 'ASC'],
      ]

    });
    const movies = movieData.map((movie) =>
      movie.get({ plain: true })
    );
    console.log(movies);
    res.render('allmovies', {
      movies,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  console.log('GET /movie/:id');
  try {
    const movieData = await Movie.findOne({
      where: { id: req.params.id },
      include: [{ model: Review, include: { model: User, attributes: ['name'] } }]
    });
    const movie = movieData.get({ plain: true });
    console.log(movie);
    if (!movie) {
      alert('Movie not found');
      res.redirect('/');
    }
    res.render('reviews', {
      movie,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;