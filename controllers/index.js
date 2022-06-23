const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

<<<<<<< HEAD
=======

>>>>>>> f17501ef00d8817d88bc30e075d9b43fc7a35693

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
