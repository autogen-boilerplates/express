var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billpaymentController = require('../controllers/billpayment.controller');

// ##########################  billpayment routes  ##########################
// get routes
router.get('/getbillpayment/:id', middlewares.handlers.asyncHandler(billpaymentController.getbillpaymentByID));
router.post('/getbillpayments', middlewares.handlers.asyncHandler(billpaymentController.getbillpayments));
// update routes
router.post('/updatebillpayment', middlewares.handlers.asyncHandler(billpaymentController.updatebillpayment));
// add routes
router.post('/addbillpayments', middlewares.handlers.asyncHandler(billpaymentController.addbillpayments));
// delete routes
router.post('/deletebillpayments', middlewares.handlers.asyncHandler(billpaymentController.deletebillpayments));

// custom routes

router.post('/getbills_all', middlewares.handlers.asyncHandler(billpaymentController.getbills_all));

router.post('/getbills_date', middlewares.handlers.asyncHandler(billpaymentController.getbills_date));

router.post('/getbilldetails', middlewares.handlers.asyncHandler(billpaymentController.getbilldetails));

router.post('/getbills_number_customer', middlewares.handlers.asyncHandler(billpaymentController.getbills_number_customer));

router.post('/getbills_location', middlewares.handlers.asyncHandler(billpaymentController.getbills_location));

module.exports = router;
