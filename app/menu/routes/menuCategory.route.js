var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var menuCategoryController = require('../controllers/menuCategory.controller');

// ##########################  menuCategory routes  ##########################
// get routes
router.get('/getmenuCategory/:id', middlewares.handlers.asyncHandler(menuCategoryController.getmenuCategoryByID));
router.post('/getmenuCategorys', middlewares.handlers.asyncHandler(menuCategoryController.getmenuCategorys));
// update routes
router.post('/updatemenuCategory', middlewares.handlers.asyncHandler(menuCategoryController.updatemenuCategory));
// add routes
router.post('/addmenuCategorys', middlewares.handlers.asyncHandler(menuCategoryController.addmenuCategorys));
// delete routes
router.post('/deletemenuCategorys', middlewares.handlers.asyncHandler(menuCategoryController.deletemenuCategorys));

module.exports = router;

