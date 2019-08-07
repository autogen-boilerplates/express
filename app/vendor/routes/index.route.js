var express = require('express');
var router = express.Router();

router.use('/', require('./vendor.route'));

router.use('/vendorcategory', require('./vendorcategory.route'));

router.use('/vendorinventoryitems', require('./vendorinventoryitems.route'));



module.exports = router;