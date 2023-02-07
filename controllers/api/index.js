const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./recipieRoutes');

router.use('/users', userRoutes);
router.use('/recipies', projectRoutes);

module.exports = router;
