var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var expenseCategoryController = require('../controllers/expenseCategory.controller');

// ##########################  expenseCategory routes  ##########################
// get routes
router.get('/getexpenseCategory/:id', middlewares.handlers.asyncHandler(expenseCategoryController.getexpenseCategoryByID));
router.post('/getexpenseCategorys', middlewares.handlers.asyncHandler(expenseCategoryController.getexpenseCategorys));
// update routes
router.post('/updateexpenseCategory', middlewares.handlers.asyncHandler(expenseCategoryController.updateexpenseCategory));
// add routes
router.post('/addexpenseCategorys', middlewares.handlers.asyncHandler(expenseCategoryController.addexpenseCategorys));
// delete routes
router.post('/deleteexpenseCategorys', middlewares.handlers.asyncHandler(expenseCategoryController.deleteexpenseCategorys));

module.exports = router;

