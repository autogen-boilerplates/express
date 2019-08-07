var express = require('express');
var router = express.Router();
	
router.use('/', require('./bill.route'));
router.use('/billorder', require('./billorder.route'));
router.use('/billtype', require('./billtype.route'));
router.use('/billcustomer', require('./billcustomer.route'));
router.use('/billcoupon', require('./billcoupon.route'));
router.use('/billtax', require('./billtax.route'));
router.use('/billpayment', require('./billpayment.route'));
router.use('/location', require('./location.route'));

module.exports = router;
