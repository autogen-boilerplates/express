var express = require('express');
var router = express.Router();

router.use('/user', require('../../user/routes/index.route'));
router.use('/inventory', require('../../inventory/routes/index.route'));
router.use('/bill', require('../../bill/routes/index.route'));
router.use('/customer', require('../../customer/routes/index.route'));
router.use('/setting', require('../../setting/routes/index.route'));
router.use('/menu', require('../../menu/routes/index.route'));
router.use('/order', require('../../order/routes/index.route'));

module.exports = router;
