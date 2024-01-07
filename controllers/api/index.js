const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
//const ApiRoute = require('../../public/js/book-search');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;