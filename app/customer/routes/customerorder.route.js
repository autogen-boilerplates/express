var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var customerorderController = require('../controllers/customerorder.controller');

// ##########################  customerorder routes  ##########################
// get routes
router.get('/getcustomerorder/:id', middlewares.handlers.asyncHandler(customerorderController.getcustomerorderByID));
router.post('/getcustomerorders', middlewares.handlers.asyncHandler(customerorderController.getcustomerorders));
// update routes
router.post('/updatecustomerorder', middlewares.handlers.asyncHandler(customerorderController.updatecustomerorder));
// add routes
router.post('/addcustomerorders', middlewares.handlers.asyncHandler(customerorderController.addcustomerorders));
// delete routes
router.post('/deletecustomerorders', middlewares.handlers.asyncHandler(customerorderController.deletecustomerorders));

// custom routes

module.exports = router;
