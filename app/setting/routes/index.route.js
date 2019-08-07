var express = require('express');
var router = express.Router();
	
router.use('/tax', require('./tax.route'));
router.use('/coupon', require('./coupon.route'));
router.use('/unit', require('./unit.route'));
router.use('/config', require('./config.route'));

module.exports = router;
