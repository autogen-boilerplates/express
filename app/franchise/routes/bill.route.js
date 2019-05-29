var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billController = require('../controllers/bill.controller');

// ##########################  bill routes  ##########################
// get routes
router.get('/getbill/:id', middlewares.handlers.asyncHandler(billController.getbillByID));
router.post('/getbills', middlewares.handlers.asyncHandler(billController.getbills));
// update routes
router.post('/updatebill', middlewares.handlers.asyncHandler(billController.updatebill));
// add routes
router.post('/addbills', middlewares.handlers.asyncHandler(billController.addbills));
// delete routes
router.post('/deletebills', middlewares.handlers.asyncHandler(billController.deletebills));

module.exports = router;

