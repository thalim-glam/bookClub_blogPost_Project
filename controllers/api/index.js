const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const ApiRoute = require('../../public/js/keys');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;