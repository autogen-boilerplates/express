var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var inventoryCategoryController = require('../controllers/inventoryCategory.controller');

// ##########################  inventoryCategory routes  ##########################
// get routes
router.get('/getinventoryCategory/:id', middlewares.handlers.asyncHandler(inventoryCategoryController.getinventoryCategoryByID));
router.post('/getinventoryCategorys', middlewares.handlers.asyncHandler(inventoryCategoryController.getinventoryCategorys));
// update routes
router.post('/updateinventoryCategory', middlewares.handlers.asyncHandler(inventoryCategoryController.updateinventoryCategory));
// add routes
router.post('/addinventoryCategorys', middlewares.handlers.asyncHandler(inventoryCategoryController.addinventoryCategorys));
// delete routes
router.post('/deleteinventoryCategorys', middlewares.handlers.asyncHandler(inventoryCategoryController.deleteinventoryCategorys));

module.exports = router;

