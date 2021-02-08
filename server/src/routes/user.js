const express = require('express')
const router = express.Router()

// Require controllers.
const userController = require('../controllers/userController')

// Routes
router.get('/', userController.index)

module.exports = router
