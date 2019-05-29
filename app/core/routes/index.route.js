var express = require('express');
var router = express.Router();

//router.use('/user', require('./user.route'));
//router.use('/course', require('../../course/routes/index.route'));
//router.use('/franchise', require('../../franchise/routes/index.route'));
router.use('/user', require('../../user/routes/index.route'));
router.use('/franchise', require('../../franchise/routes/index.route'));
router.use('/menu', require('../../menu/routes/index.route'));
router.use('/reminder', require('../../reminder/routes/index.route'));
router.use('/setting', require('../../setting/routes/index.route'));
router.use('/table', require('../../table/routes/index.route'));

module.exports = router;