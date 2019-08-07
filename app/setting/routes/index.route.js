var express = require('express');
var router = express.Router();
<<<<<<< HEAD
	
router.use('/tax', require('./tax.route'));
router.use('/coupon', require('./coupon.route'));
router.use('/unit', require('./unit.route'));
router.use('/config', require('./config.route'));

module.exports = router;
=======

router.use('/', require('./setting.route'));

router.use('/unit', require('./unit.route'));

router.use('/tax', require('./tax.route'));



module.exports = router;
>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
