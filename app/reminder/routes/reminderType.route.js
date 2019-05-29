var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var reminderTypeController = require('../controllers/reminderType.controller');

// ##########################  reminderType routes  ##########################
// get routes
router.get('/getreminderType/:id', middlewares.handlers.asyncHandler(reminderTypeController.getreminderTypeByID));
router.post('/getreminderTypes', middlewares.handlers.asyncHandler(reminderTypeController.getreminderTypes));
// update routes
router.post('/updatereminderType', middlewares.handlers.asyncHandler(reminderTypeController.updatereminderType));
// add routes
router.post('/addreminderTypes', middlewares.handlers.asyncHandler(reminderTypeController.addreminderTypes));
// delete routes
router.post('/deletereminderTypes', middlewares.handlers.asyncHandler(reminderTypeController.deletereminderTypes));

module.exports = router;

