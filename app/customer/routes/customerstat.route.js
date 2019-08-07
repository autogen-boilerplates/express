var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var customerstatController = require('../controllers/customerstat.controller');

// ##########################  customerstat routes  ##########################
// get routes
router.get('/getcustomerstat/:id', middlewares.handlers.asyncHandler(customerstatController.getcustomerstatByID));
router.post('/getcustomerstats', middlewares.handlers.asyncHandler(customerstatController.getcustomerstats));
// update routes
router.post('/updatecustomerstat', middlewares.handlers.asyncHandler(customerstatController.updatecustomerstat));
// add routes
router.post('/addcustomerstats', middlewares.handlers.asyncHandler(customerstatController.addcustomerstats));
// delete routes
router.post('/deletecustomerstats', middlewares.handlers.asyncHandler(customerstatController.deletecustomerstats));

// custom routes

module.exports = router;
