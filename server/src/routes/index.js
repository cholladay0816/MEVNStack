var express = require('express');
var router = express.Router();

// Require controllers.
var index_controller = require('../controllers/indexController');


// Routes
router.get('/', index_controller.index);

module.exports = router;