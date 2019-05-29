var express = require('express');
var router = express.Router();

router.use('/', require('./user.route'));

router.use('/userRole', require('./userRole.route'));

router.use('/roleAccessDetail', require('./roleAccessDetail.route'));

router.use('/userType', require('./userType.route'));

router.use('/userProfile', require('./userProfile.route'));



module.exports = router;