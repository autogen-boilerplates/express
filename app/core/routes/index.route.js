var express = require('express');
var router = express.Router();

//router.use('/user', require('../../user/routes/index.route'));
//router.use('/inventory', require('../../inventory/routes/index.route'));
router.use('/setting', require('../../setting/routes/index.route'));

module.exports = router;
