//you require all the files that need routes for our project
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

//Created the routes and pointed to the files to get the information from
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//then you export everything
module.exports = router;
