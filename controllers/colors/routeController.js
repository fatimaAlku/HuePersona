const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authDataController = require('../auth/dataController.js')
const testController = require('./testController.js');

// add routes
// Index
router.get('/', authDataController.auth
    /* check if the token exists in the header or the query, set req.user and res.locals.data.token */ , 
    dataController.index
    /*grab and save the logged in user's colors */, 
    viewController.index
    /* display the logged in users fruits and also the link to the new page with the token*/
);
// New
router.get('/new', authDataController.auth, viewController.newView );
// Delete
router.delete('/:id',authDataController.auth, dataController.destroy, viewController.redirectHome);
// Update
router.put('/:id',authDataController.auth, dataController.update, viewController.redirectShow);
// Create
router.post('/', authDataController.auth, dataController.create, viewController.redirectHome);
// Edit
router.get('/:id/edit', authDataController.auth, dataController.show, viewController.edit);
// Show
router.get('/:id', authDataController.auth, dataController.show, viewController.show);



// Test Form Route (GET)
router.get('/test', authDataController.auth, testController.showTestForm);

// Test Result Submission (POST)
router.post('/results', authDataController.auth, testController.handleResults);



// export router
module.exports = router;