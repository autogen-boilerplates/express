var express = require('express');
var router = express.Router();
	
router.use('/', require('./inventory.route'));
router.use('/inventorytype', require('./inventorytype.route'));
router.use('/inventorycategory', require('./inventorycategory.route'));
router.use('/vendor', require('./vendor.route'));
router.use('/vendorcategory', require('./vendorcategory.route'));
router.use('/vendorinventory', require('./vendorinventory.route'));

module.exports = router;
