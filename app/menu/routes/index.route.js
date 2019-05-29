var express = require('express');
var router = express.Router();

router.use('/', require('./menu.route'));

router.use('/menuIngredient', require('./menuIngredient.route'));

router.use('/menuCategory', require('./menuCategory.route'));

router.use('/menuType', require('./menuType.route'));

router.use('/menuTopping', require('./menuTopping.route'));

router.use('/toppingIngredient', require('./toppingIngredient.route'));



module.exports = router;