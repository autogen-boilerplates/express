var express = require('express');
var router = express.Router();

router.use('/', require('./reminder.route'));

router.use('/reminderType', require('./reminderType.route'));

router.use('/reminderCategory', require('./reminderCategory.route'));



module.exports = router;