var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var inventoryController = require('../controllers/inventory.controller');

// ##########################  inventory routes  ##########################
// get routes
router.get('/getinventory/:id', middlewares.handlers.asyncHandler(inventoryController.getinventoryByID));
router.post('/getinventorys', middlewares.handlers.asyncHandler(inventoryController.getinventorys));
// update routes
router.post('/updateinventory', middlewares.handlers.asyncHandler(inventoryController.updateinventory));
// add routes
router.post('/addinventorys', middlewares.handlers.asyncHandler(inventoryController.addinventorys));
// delete routes
router.post('/deleteinventorys', middlewares.handlers.asyncHandler(inventoryController.deleteinventorys));

module.exports = router;

