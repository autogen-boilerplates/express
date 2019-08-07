var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var locationController = require('../controllers/location.controller');

// ##########################  location routes  ##########################
// get routes
router.get('/getlocation/:id', middlewares.handlers.asyncHandler(locationController.getlocationByID));
router.post('/getlocations', middlewares.handlers.asyncHandler(locationController.getlocations));
// update routes
router.post('/updatelocation', middlewares.handlers.asyncHandler(locationController.updatelocation));
// add routes
router.post('/addlocations', middlewares.handlers.asyncHandler(locationController.addlocations));
// delete routes
router.post('/deletelocations', middlewares.handlers.asyncHandler(locationController.deletelocations));

// custom routes

router.post('/getbills_all', middlewares.handlers.asyncHandler(locationController.getbills_all));

router.post('/getbills_date', middlewares.handlers.asyncHandler(locationController.getbills_date));

router.post('/getbilldetails', middlewares.handlers.asyncHandler(locationController.getbilldetails));

router.post('/getbills_number_customer', middlewares.handlers.asyncHandler(locationController.getbills_number_customer));

router.post('/getbills_location', middlewares.handlers.asyncHandler(locationController.getbills_location));

module.exports = router;
