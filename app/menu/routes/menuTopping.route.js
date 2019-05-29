var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var menuToppingController = require('../controllers/menuTopping.controller');

// ##########################  menuTopping routes  ##########################
// get routes
router.get('/getmenuTopping/:id', middlewares.handlers.asyncHandler(menuToppingController.getmenuToppingByID));
router.post('/getmenuToppings', middlewares.handlers.asyncHandler(menuToppingController.getmenuToppings));
// update routes
router.post('/updatemenuTopping', middlewares.handlers.asyncHandler(menuToppingController.updatemenuTopping));
// add routes
router.post('/addmenuToppings', middlewares.handlers.asyncHandler(menuToppingController.addmenuToppings));
// delete routes
router.post('/deletemenuToppings', middlewares.handlers.asyncHandler(menuToppingController.deletemenuToppings));

module.exports = router;

