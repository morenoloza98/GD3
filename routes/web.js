let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidators');
let passport = require('passport');
let userModel = require('../models/User');

router.get('/', homepageController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);
router.post('/register', authValidator.store, authController.store);
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login?authError=1'}),
  async (req, res) => {
    const {email, password} = req.body
    const user = await userModel.findByEmail(email)
    res.redirect(userModel.getRedirectUrl(user.role));
  }
);
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
