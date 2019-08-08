var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var couponController = require('../controllers/coupon.controller');

// ##########################  coupon routes  ##########################
// get routes
router.get('/getcoupon/:id', middlewares.handlers.asyncHandler(couponController.getcouponByID));
router.post('/getcoupons', middlewares.handlers.asyncHandler(couponController.getcoupons));
// update routes
router.post('/updatecoupon', middlewares.handlers.asyncHandler(couponController.updatecoupon));
// add routes
router.post('/addcoupons', middlewares.handlers.asyncHandler(couponController.addcoupons));
// delete routes
router.post('/deletecoupons', middlewares.handlers.asyncHandler(couponController.deletecoupons));

// custom routes

module.exports = router;
