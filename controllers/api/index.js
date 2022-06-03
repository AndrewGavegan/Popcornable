const router = require('express').Router();
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const reviewRoutes = require('./reviewRoutes');


router.use('/user', userRoutes, movieRoutes, reviewRoutes);

module.exports = router;
