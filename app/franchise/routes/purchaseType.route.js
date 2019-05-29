var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var purchaseTypeController = require('../controllers/purchaseType.controller');

// ##########################  purchaseType routes  ##########################
// get routes
router.get('/getpurchaseType/:id', middlewares.handlers.asyncHandler(purchaseTypeController.getpurchaseTypeByID));
router.post('/getpurchaseTypes', middlewares.handlers.asyncHandler(purchaseTypeController.getpurchaseTypes));
// update routes
router.post('/updatepurchaseType', middlewares.handlers.asyncHandler(purchaseTypeController.updatepurchaseType));
// add routes
router.post('/addpurchaseTypes', middlewares.handlers.asyncHandler(purchaseTypeController.addpurchaseTypes));
// delete routes
router.post('/deletepurchaseTypes', middlewares.handlers.asyncHandler(purchaseTypeController.deletepurchaseTypes));

module.exports = router;

