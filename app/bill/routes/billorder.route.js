var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billorderController = require('../controllers/billorder.controller');

// ##########################  billorder routes  ##########################
// get routes
router.get('/getbillorder/:id', middlewares.handlers.asyncHandler(billorderController.getbillorderByID));
router.post('/getbillorders', middlewares.handlers.asyncHandler(billorderController.getbillorders));
// update routes
router.post('/updatebillorder', middlewares.handlers.asyncHandler(billorderController.updatebillorder));
// add routes
router.post('/addbillorders', middlewares.handlers.asyncHandler(billorderController.addbillorders));
// delete routes
router.post('/deletebillorders', middlewares.handlers.asyncHandler(billorderController.deletebillorders));

// custom routes

router.post('/getbills_all', middlewares.handlers.asyncHandler(billorderController.getbills_all));

router.post('/getbills_date', middlewares.handlers.asyncHandler(billorderController.getbills_date));

router.post('/getbilldetails', middlewares.handlers.asyncHandler(billorderController.getbilldetails));

router.post('/getbills_number_customer', middlewares.handlers.asyncHandler(billorderController.getbills_number_customer));

router.post('/getbills_location', middlewares.handlers.asyncHandler(billorderController.getbills_location));

module.exports = router;
