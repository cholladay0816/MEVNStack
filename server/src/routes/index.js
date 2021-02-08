const express = require('express')
const router = express.Router()

// Require controllers.
const indexController = require('../controllers/indexController')

// Routes
router.get('/', indexController.index)

module.exports = router
