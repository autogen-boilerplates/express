var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var purchaseController = require('../controllers/purchase.controller');

// ##########################  purchase routes  ##########################
// get routes
router.get('/getpurchase/:id', middlewares.handlers.asyncHandler(purchaseController.getpurchaseByID));
router.post('/getpurchases', middlewares.handlers.asyncHandler(purchaseController.getpurchases));
// update routes
router.post('/updatepurchase', middlewares.handlers.asyncHandler(purchaseController.updatepurchase));
// add routes
router.post('/addpurchases', middlewares.handlers.asyncHandler(purchaseController.addpurchases));
// delete routes
router.post('/deletepurchases', middlewares.handlers.asyncHandler(purchaseController.deletepurchases));

module.exports = router;

