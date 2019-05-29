var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var cartItemController = require('../controllers/cartItem.controller');

// ##########################  cartItem routes  ##########################
// get routes
router.get('/getcartItem/:id', middlewares.handlers.asyncHandler(cartItemController.getcartItemByID));
router.post('/getcartItems', middlewares.handlers.asyncHandler(cartItemController.getcartItems));
// update routes
router.post('/updatecartItem', middlewares.handlers.asyncHandler(cartItemController.updatecartItem));
// add routes
router.post('/addcartItems', middlewares.handlers.asyncHandler(cartItemController.addcartItems));
// delete routes
router.post('/deletecartItems', middlewares.handlers.asyncHandler(cartItemController.deletecartItems));

module.exports = router;

