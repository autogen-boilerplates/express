var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var reminderController = require('../controllers/reminder.controller');

// ##########################  reminder routes  ##########################
// get routes
router.get('/getreminder/:id', middlewares.handlers.asyncHandler(reminderController.getreminderByID));
router.post('/getreminders', middlewares.handlers.asyncHandler(reminderController.getreminders));
// update routes
router.post('/updatereminder', middlewares.handlers.asyncHandler(reminderController.updatereminder));
// add routes
router.post('/addreminders', middlewares.handlers.asyncHandler(reminderController.addreminders));
// delete routes
router.post('/deletereminders', middlewares.handlers.asyncHandler(reminderController.deletereminders));

module.exports = router;

