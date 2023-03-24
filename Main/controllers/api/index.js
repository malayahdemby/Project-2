const router = require('express').Router();
const userRoutes = require('./userRoutes');
const noteRoutes = require('./noteRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/users', userRoutes);
router.use('/notes', noteRoutes);
router.use('/task', taskRoutes);

module.exports = router;
