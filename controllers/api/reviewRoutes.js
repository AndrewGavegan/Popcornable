const router = require('express').Router();
const { Movie, Review } = require('../../models');

// find all movies
router.get('/', async (req, res) => {
  try{
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
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// find one movie
router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk (req.params.id, {
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
    console.log(movie);
    res.render('homepage', {
      movie,
      loggedIn: req.session.loggedIn,
    }); 
    res.render()
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // find all reviews
router.get('/', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {
          model: Review,
          attributes: [
            'id', 
            'user_id', 
            'movie_id', 
            'body',
            'rating',
          ]
        }
      ]
    });
    res.render()
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Post a new Review
router.post('/reviews', async (req,res) => {
  try{
  const reviewData = await Review.create({
  body: req.body.body,
  rating: req.body.rating,
  
  // like his example
  // username: req.body.username,
  // email: req.body.email,
  // password: req.body.password,
});

req.session.save(() =>{
  req.session.loggedIn = true;
  res.status(200).json(reviewData)
}) 

  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}) 

module.exports = router;
