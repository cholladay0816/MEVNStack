const express = require('express')
const router = express.Router()

// Require controllers.
const userController = require('../controllers/userController')

// Routes
router.get('/', userController.index)

router.get('/:id', userController.show)

router.post('/new', userController.store)

module.exports = router
