const router = require('express').Router();
const { Movie } = require('../../models');

// find all movies
router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      include: [
        {
          model: Movie,
          attributes: ['name', 'description', 'image_url'],
        },
      ],
    });
    const movies = movieData.map((movie) =>
      movie.get({ plain: true })
    );
    console.log(movies);
    res.render('homepage', {
      movies,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// find one movie
router.get('/movies/:name', async (req, res) => {
  try {
    const movieData = await Movie.findOne(req.params.name, {
      include: [
        {
          model: Movie,
          attributes: [
            'id',
            'name',
            'year',
            'genre',
            'runtime',
            'director',
            'image_url',
          ],
        },
      ],
    });
    const movie = movieData.get({ plain: true });

    if (!movie) {
      res.send('<script>alert("Movie not found")</script>');
      res.redirect('/');
      return;
    }
    console.log(movie);
    res.render('reviews', {
      movie,
      loggedIn: req.session.loggedIn,
    });
    res.render();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;