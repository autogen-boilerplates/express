var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var customerController = require('../controllers/customer.controller');

// ##########################  customer routes  ##########################
// get routes
router.get('/getcustomer/:id', middlewares.handlers.asyncHandler(customerController.getcustomerByID));
router.post('/getcustomers', middlewares.handlers.asyncHandler(customerController.getcustomers));
// update routes
router.post('/updatecustomer', middlewares.handlers.asyncHandler(customerController.updatecustomer));
// add routes
router.post('/addcustomers', middlewares.handlers.asyncHandler(customerController.addcustomers));
// delete routes
router.post('/deletecustomers', middlewares.handlers.asyncHandler(customerController.deletecustomers));

// custom routes

module.exports = router;
