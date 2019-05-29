var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var saleCategoryController = require('../controllers/saleCategory.controller');

// ##########################  saleCategory routes  ##########################
// get routes
router.get('/getsaleCategory/:id', middlewares.handlers.asyncHandler(saleCategoryController.getsaleCategoryByID));
router.post('/getsaleCategorys', middlewares.handlers.asyncHandler(saleCategoryController.getsaleCategorys));
// update routes
router.post('/updatesaleCategory', middlewares.handlers.asyncHandler(saleCategoryController.updatesaleCategory));
// add routes
router.post('/addsaleCategorys', middlewares.handlers.asyncHandler(saleCategoryController.addsaleCategorys));
// delete routes
router.post('/deletesaleCategorys', middlewares.handlers.asyncHandler(saleCategoryController.deletesaleCategorys));

module.exports = router;

