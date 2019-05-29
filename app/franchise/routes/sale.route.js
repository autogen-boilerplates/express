var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var saleController = require('../controllers/sale.controller');

// ##########################  sale routes  ##########################
// get routes
router.get('/getsale/:id', middlewares.handlers.asyncHandler(saleController.getsaleByID));
router.post('/getsales', middlewares.handlers.asyncHandler(saleController.getsales));
// update routes
router.post('/updatesale', middlewares.handlers.asyncHandler(saleController.updatesale));
// add routes
router.post('/addsales', middlewares.handlers.asyncHandler(saleController.addsales));
// delete routes
router.post('/deletesales', middlewares.handlers.asyncHandler(saleController.deletesales));

// getsalesummary
router.post('/getsalesummary',middlewares.handlers.asyncHandler(saleController.getSaleSummary));
router.post('/getsalebytablecode',middlewares.handlers.asyncHandler(saleController.getSaleByTableCode));
router.post('/getsalebytablecode',middlewares.handlers.asyncHandler(saleController.getSaleByTableCode));

module.exports = router;

