var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billcouponController = require('../controllers/billcoupon.controller');

// ##########################  billcoupon routes  ##########################
// get routes
router.get('/getbillcoupon/:id', middlewares.handlers.asyncHandler(billcouponController.getbillcouponByID));
router.post('/getbillcoupons', middlewares.handlers.asyncHandler(billcouponController.getbillcoupons));
// update routes
router.post('/updatebillcoupon', middlewares.handlers.asyncHandler(billcouponController.updatebillcoupon));
// add routes
router.post('/addbillcoupons', middlewares.handlers.asyncHandler(billcouponController.addbillcoupons));
// delete routes
router.post('/deletebillcoupons', middlewares.handlers.asyncHandler(billcouponController.deletebillcoupons));

// custom routes

router.post('/getbills_all', middlewares.handlers.asyncHandler(billcouponController.getbills_all));

router.post('/getbills_date', middlewares.handlers.asyncHandler(billcouponController.getbills_date));

router.post('/getbilldetails', middlewares.handlers.asyncHandler(billcouponController.getbilldetails));

router.post('/getbills_number_customer', middlewares.handlers.asyncHandler(billcouponController.getbills_number_customer));

router.post('/getbills_location', middlewares.handlers.asyncHandler(billcouponController.getbills_location));

module.exports = router;
