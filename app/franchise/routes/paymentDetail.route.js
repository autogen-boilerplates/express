var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var paymentDetailController = require('../controllers/paymentDetail.controller');

// ##########################  paymentDetail routes  ##########################
// get routes
router.get('/getpaymentDetail/:id', middlewares.handlers.asyncHandler(paymentDetailController.getpaymentDetailByID));
router.post('/getpaymentDetails', middlewares.handlers.asyncHandler(paymentDetailController.getpaymentDetails));
// update routes
router.post('/updatepaymentDetail', middlewares.handlers.asyncHandler(paymentDetailController.updatepaymentDetail));
// add routes
router.post('/addpaymentDetails', middlewares.handlers.asyncHandler(paymentDetailController.addpaymentDetails));
// delete routes
router.post('/deletepaymentDetails', middlewares.handlers.asyncHandler(paymentDetailController.deletepaymentDetails));

module.exports = router;

