const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const colorsViewController = require('../colors/viewController')

router.post('/', dataController.createUser, viewController.redirectToLogin)// signup user => login page
router.get('/', viewController.signUp) // show sign up form
router.post('/login', dataController.loginUser, colorsViewController.redirectHome)
router.get('/login', viewController.signIn) // show login form
router.put('/:id', dataController.updateUser) ///currently unused
router.delete('/:id', dataController.auth, dataController.deleteUser) ///currently unused

module.exports = router