var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billController = require('../controllers/bill.controller');

// ##########################  bill routes [1] ##########################
// get routes
router.get('/getbill/:id', middlewares.handlers.asyncHandler(billController.getbillByID));
router.post('/getbills', middlewares.handlers.asyncHandler(billController.getbills));
// update routes
router.post('/updatebill', middlewares.handlers.asyncHandler(billController.updatebill));
// add routes
router.post('/addbills', middlewares.handlers.asyncHandler(billController.addbills));
// delete routes
router.post('/deletebills', middlewares.handlers.asyncHandler(billController.deletebills));

// custom routes

router.post('/getbills_all', middlewares.handlers.asyncHandler(billController.getbills_all));

router.post('/getbills_date', middlewares.handlers.asyncHandler(billController.getbills_date));

router.post('/getbilldetails', middlewares.handlers.asyncHandler(billController.getbilldetails));

router.post('/getbills_number_customer', middlewares.handlers.asyncHandler(billController.getbills_number_customer));

router.post('/getbills_location', middlewares.handlers.asyncHandler(billController.getbills_location));

module.exports = router;
