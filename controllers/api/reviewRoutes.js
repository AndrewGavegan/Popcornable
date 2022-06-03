const router = require('express').Router();
const { Review } = require('../../models');

// // Find all reviews
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
    res.render();
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
    });

    req.session.save(() =>{
      req.session.loggedIn = true;
      res.status(200).json(reviewData);
    });

    if (!reviewData){
      res.status(400).json ({ message: 'Add a new review or rating!'});
    }

  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}) ;

// Update Review
router.put('/:id', (req, res) => {
  Review.update(
    {
      body: req.body.body,
      rating: req.body.rating,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedReview) => {
      res.json(updatedReview);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete Review
router.delete('/:id', (req, res) => {
  Review.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
