let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');

router.get('/', homepageController.index);

module.exports = router;