var express = require('express');
var router = express.Router();

router.use('/', require('./setting.route'));

router.use('/unit', require('./unit.route'));

router.use('/tax', require('./tax.route'));



module.exports = router;