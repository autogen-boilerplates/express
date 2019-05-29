var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var reminderCategoryController = require('../controllers/reminderCategory.controller');

// ##########################  reminderCategory routes  ##########################
// get routes
router.get('/getreminderCategory/:id', middlewares.handlers.asyncHandler(reminderCategoryController.getreminderCategoryByID));
router.post('/getreminderCategorys', middlewares.handlers.asyncHandler(reminderCategoryController.getreminderCategorys));
// update routes
router.post('/updatereminderCategory', middlewares.handlers.asyncHandler(reminderCategoryController.updatereminderCategory));
// add routes
router.post('/addreminderCategorys', middlewares.handlers.asyncHandler(reminderCategoryController.addreminderCategorys));
// delete routes
router.post('/deletereminderCategorys', middlewares.handlers.asyncHandler(reminderCategoryController.deletereminderCategorys));

module.exports = router;

