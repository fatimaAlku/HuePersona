const express = require('express')
const router = express.Router()
const userApiController = require('../controllers/auth/apiController')
const colorApiController = require('../controllers/colors/apiController')
const colorDataController = require('../controllers/colors/dataController')
const userDataController = require('../controllers/auth/dataController')

// User API Routes
router.post('/users', userApiController.createUser)
router.post('/users/login', userApiController.loginUser)
router.get('/users/profile', userApiController.auth, userApiController.getProfile)
router.put('/users/:id', userApiController.auth, userApiController.updateUser)
router.delete('/users/:id', userApiController.auth, userApiController.deleteUser)

// Color API Routes
router.get('/colors', userApiController.auth, colorDataController.index, colorApiController.index)
router.get('/colors/:id', userApiController.auth, colorDataController.show, colorApiController.show)
router.post('/colors', userApiController.auth, colorDataController.create, colorApiController.create)
router.put('/colors/:id', userApiController.auth, colorDataController.update, colorApiController.update)
router.delete('/colors/:id', userApiController.auth, colorDataController.destroy, colorApiController.destroy)

module.exports = router 