var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var saleTaxController = require('../controllers/saleTax.controller');

// ##########################  saleTax routes  ##########################
// get routes
router.get('/getsaleTax/:id', middlewares.handlers.asyncHandler(saleTaxController.getsaleTaxByID));
router.post('/getsaleTaxs', middlewares.handlers.asyncHandler(saleTaxController.getsaleTaxs));
// update routes
router.post('/updatesaleTax', middlewares.handlers.asyncHandler(saleTaxController.updatesaleTax));
// add routes
router.post('/addsaleTaxs', middlewares.handlers.asyncHandler(saleTaxController.addsaleTaxs));
// delete routes
router.post('/deletesaleTaxs', middlewares.handlers.asyncHandler(saleTaxController.deletesaleTaxs));

module.exports = router;

