const router = require('express').Router();
const userRoutes = require('./userRoutes');

// /user OR / ?
router.use('/user', userRoutes);

module.exports = router;
