var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billcustomerController = require('../controllers/billcustomer.controller');

// ##########################  billcustomer routes  ##########################
// get routes
router.get('/getbillcustomer/:id', middlewares.handlers.asyncHandler(billcustomerController.getbillcustomerByID));
router.post('/getbillcustomers', middlewares.handlers.asyncHandler(billcustomerController.getbillcustomers));
// update routes
router.post('/updatebillcustomer', middlewares.handlers.asyncHandler(billcustomerController.updatebillcustomer));
// add routes
router.post('/addbillcustomers', middlewares.handlers.asyncHandler(billcustomerController.addbillcustomers));
// delete routes
router.post('/deletebillcustomers', middlewares.handlers.asyncHandler(billcustomerController.deletebillcustomers));

// custom routes

router.post('/getbills_all', middlewares.handlers.asyncHandler(billcustomerController.getbills_all));

router.post('/getbills_date', middlewares.handlers.asyncHandler(billcustomerController.getbills_date));

router.post('/getbilldetails', middlewares.handlers.asyncHandler(billcustomerController.getbilldetails));

router.post('/getbills_number_customer', middlewares.handlers.asyncHandler(billcustomerController.getbills_number_customer));

router.post('/getbills_location', middlewares.handlers.asyncHandler(billcustomerController.getbills_location));

module.exports = router;
