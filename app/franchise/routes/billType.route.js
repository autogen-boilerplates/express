var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billTypeController = require('../controllers/billType.controller');

// ##########################  billType routes  ##########################
// get routes
router.get('/getbillType/:id', middlewares.handlers.asyncHandler(billTypeController.getbillTypeByID));
router.post('/getbillTypes', middlewares.handlers.asyncHandler(billTypeController.getbillTypes));
// update routes
router.post('/updatebillType', middlewares.handlers.asyncHandler(billTypeController.updatebillType));
// add routes
router.post('/addbillTypes', middlewares.handlers.asyncHandler(billTypeController.addbillTypes));
// delete routes
router.post('/deletebillTypes', middlewares.handlers.asyncHandler(billTypeController.deletebillTypes));

module.exports = router;

