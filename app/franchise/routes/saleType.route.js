var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var saleTypeController = require('../controllers/saleType.controller');

// ##########################  saleType routes  ##########################
// get routes
router.get('/getsaleType/:id', middlewares.handlers.asyncHandler(saleTypeController.getsaleTypeByID));
router.post('/getsaleTypes', middlewares.handlers.asyncHandler(saleTypeController.getsaleTypes));
// update routes
router.post('/updatesaleType', middlewares.handlers.asyncHandler(saleTypeController.updatesaleType));
// add routes
router.post('/addsaleTypes', middlewares.handlers.asyncHandler(saleTypeController.addsaleTypes));
// delete routes
router.post('/deletesaleTypes', middlewares.handlers.asyncHandler(saleTypeController.deletesaleTypes));

module.exports = router;

