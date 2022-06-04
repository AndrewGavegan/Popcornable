const router = require('express').Router();
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const reviewRoutes = require('./reviewRoutes');


router.use('/user', userRoutes)
router.use('/movie', movieRoutes)
router.use('/review', reviewRoutes)

module.exports = router;