var express = require('express');
var router = express.Router();
	
router.use('/', require('./customer.route'));
router.use('/customerorder', require('./customerorder.route'));
router.use('/customerstat', require('./customerstat.route'));

module.exports = router;
