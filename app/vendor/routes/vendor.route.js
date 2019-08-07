var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var vendorController = require('../controllers/vendor.controller');

// ##########################  vendor routes  ##########################
// get routes
router.get('/getvendor/:id', middlewares.handlers.asyncHandler(vendorController.getvendorByID));
router.post('/getvendors', middlewares.handlers.asyncHandler(vendorController.getvendors));
// update routes
router.post('/updatevendor', middlewares.handlers.asyncHandler(vendorController.updatevendor));
// add routes
router.post('/addvendors', middlewares.handlers.asyncHandler(vendorController.addvendors));
// delete routes
router.post('/deletevendors', middlewares.handlers.asyncHandler(vendorController.deletevendors));

module.exports = router;

