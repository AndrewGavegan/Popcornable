const router = require('express').Router();
const { Review } = require('../../models');
// linking to authentifictaion middleware that was set up in utils folder //
const withAuth = require('../../utils/auth');

// // Post a new Review
router.post('/reviews', withAuth, async (req,res) => {
  try{
    const reviewData = await Review.create({
      body: req.body.body,
      rating: req.body.rating,
      user_id: req.session.user_id,
      movie_id: req.body.movie_id
    });

    if (!reviewData) {
      res.status(400).json({ message: 'Add a new review or rating!' });
      return;
    }
    res.status(200).json(reviewData);
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
