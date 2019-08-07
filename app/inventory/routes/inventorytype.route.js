var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var inventorytypeController = require('../controllers/inventorytype.controller');

// ##########################  inventorytype routes  ##########################
// get routes
router.get('/getinventorytype/:id', middlewares.handlers.asyncHandler(inventorytypeController.getinventorytypeByID));
router.post('/getinventorytypes', middlewares.handlers.asyncHandler(inventorytypeController.getinventorytypes));
// update routes
router.post('/updateinventorytype', middlewares.handlers.asyncHandler(inventorytypeController.updateinventorytype));
// add routes
router.post('/addinventorytypes', middlewares.handlers.asyncHandler(inventorytypeController.addinventorytypes));
// delete routes
router.post('/deleteinventorytypes', middlewares.handlers.asyncHandler(inventorytypeController.deleteinventorytypes));

// custom routes

module.exports = router;
