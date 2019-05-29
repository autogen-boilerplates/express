var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var paymentModeController = require('../controllers/paymentMode.controller');

// ##########################  paymentMode routes  ##########################
// get routes
router.get('/getpaymentMode/:id', middlewares.handlers.asyncHandler(paymentModeController.getpaymentModeByID));
router.post('/getpaymentModes', middlewares.handlers.asyncHandler(paymentModeController.getpaymentModes));
// update routes
router.post('/updatepaymentMode', middlewares.handlers.asyncHandler(paymentModeController.updatepaymentMode));
// add routes
router.post('/addpaymentModes', middlewares.handlers.asyncHandler(paymentModeController.addpaymentModes));
// delete routes
router.post('/deletepaymentModes', middlewares.handlers.asyncHandler(paymentModeController.deletepaymentModes));

module.exports = router;

