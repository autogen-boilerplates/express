var express = require('express');
var router = express.Router();
<<<<<<< HEAD
	
router.use('/', require('./menu.route'));
router.use('/menuingredient', require('./menuingredient.route'));
router.use('/menutype', require('./menutype.route'));
router.use('/menupreparation', require('./menupreparation.route'));

module.exports = router;
=======

router.use('/', require('./menu.route'));

router.use('/menuIngredient', require('./menuIngredient.route'));

router.use('/menuCategory', require('./menuCategory.route'));

router.use('/menuType', require('./menuType.route'));

router.use('/menuTopping', require('./menuTopping.route'));

router.use('/toppingIngredient', require('./toppingIngredient.route'));



module.exports = router;
>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
