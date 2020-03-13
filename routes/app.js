let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
let authController = require('../controllers/AuthController');
let authMiddleware = require('../middlewares/AuthMiddleware');

router.get('/dashboard', authMiddleware.isUser, dashboardController.index);
router.get('/users', authMiddleware.isAdmin, authController.usersManager);

module.exports = router;
