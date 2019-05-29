var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var expenseController = require('../controllers/expense.controller');

// ##########################  expense routes  ##########################
// get routes
router.get('/getexpense/:id', middlewares.handlers.asyncHandler(expenseController.getexpenseByID));
router.post('/getexpenses', middlewares.handlers.asyncHandler(expenseController.getexpenses));
// update routes
router.post('/updateexpense', middlewares.handlers.asyncHandler(expenseController.updateexpense));
// add routes
router.post('/addexpenses', middlewares.handlers.asyncHandler(expenseController.addexpenses));
// delete routes
router.post('/deleteexpenses', middlewares.handlers.asyncHandler(expenseController.deleteexpenses));

module.exports = router;

