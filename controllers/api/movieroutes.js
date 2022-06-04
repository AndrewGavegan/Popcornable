const router = require('express').Router();
const { Movie } = require('../../models');

// find all movies
router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
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

module.exports = router;