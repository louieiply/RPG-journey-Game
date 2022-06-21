const router = require('express').Router();
const userRoutes = require('./userRoutes');
const game = require('./Game');
const comment = require('./Comment');
const categories = require('./Category');

// router.use('/categories',categories);
router.use('/comments',comment);
router.use('/games',game);
router.use('/users',userRoutes);

module.exports = router;
