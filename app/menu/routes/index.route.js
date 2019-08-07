var express = require('express');
var router = express.Router();
	
router.use('/', require('./menu.route'));
router.use('/menuingredient', require('./menuingredient.route'));
router.use('/menutype', require('./menutype.route'));
router.use('/menupreparation', require('./menupreparation.route'));

module.exports = router;
