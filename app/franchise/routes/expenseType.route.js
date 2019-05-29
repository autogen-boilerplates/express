var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var expenseTypeController = require('../controllers/expenseType.controller');

// ##########################  expenseType routes  ##########################
// get routes
router.get('/getexpenseType/:id', middlewares.handlers.asyncHandler(expenseTypeController.getexpenseTypeByID));
router.post('/getexpenseTypes', middlewares.handlers.asyncHandler(expenseTypeController.getexpenseTypes));
// update routes
router.post('/updateexpenseType', middlewares.handlers.asyncHandler(expenseTypeController.updateexpenseType));
// add routes
router.post('/addexpenseTypes', middlewares.handlers.asyncHandler(expenseTypeController.addexpenseTypes));
// delete routes
router.post('/deleteexpenseTypes', middlewares.handlers.asyncHandler(expenseTypeController.deleteexpenseTypes));

module.exports = router;

