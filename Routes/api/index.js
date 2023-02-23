const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

//Created the routes and pointed to the files to get the information from
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
