var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var deliveryStatusController = require('../controllers/deliveryStatus.controller');

// ##########################  deliveryStatus routes  ##########################
// get routes
router.get('/getdeliveryStatus/:id', middlewares.handlers.asyncHandler(deliveryStatusController.getdeliveryStatusByID));
router.post('/getdeliveryStatuss', middlewares.handlers.asyncHandler(deliveryStatusController.getdeliveryStatuss));
// update routes
router.post('/updatedeliveryStatus', middlewares.handlers.asyncHandler(deliveryStatusController.updatedeliveryStatus));
// add routes
router.post('/adddeliveryStatuss', middlewares.handlers.asyncHandler(deliveryStatusController.adddeliveryStatuss));
// delete routes
router.post('/deletedeliveryStatuss', middlewares.handlers.asyncHandler(deliveryStatusController.deletedeliveryStatuss));

module.exports = router;

