const express = require('express');
const router = express.Router();

// Import route modules (to be created)
// const authRoutes = require('./auth');
// const userRoutes = require('./users');
// const serviceRoutes = require('./services');
// const orderRoutes = require('./orders');

// API version
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date(),
  });
});

// Mount routes (uncomment when route files are created)
// router.use('/auth', authRoutes);
// router.use('/users', userRoutes);
// router.use('/services', serviceRoutes);
// router.use('/orders', orderRoutes);

module.exports = router;
