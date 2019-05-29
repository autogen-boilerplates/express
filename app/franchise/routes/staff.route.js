var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var staffController = require('../controllers/staff.controller');

// ##########################  staff routes  ##########################
// get routes
router.get('/getstaff/:id', middlewares.handlers.asyncHandler(staffController.getstaffByID));
router.post('/getstaffs', middlewares.handlers.asyncHandler(staffController.getstaffs));
// update routes
router.post('/updatestaff', middlewares.handlers.asyncHandler(staffController.updatestaff));
// add routes
router.post('/addstaffs', middlewares.handlers.asyncHandler(staffController.addstaffs));
// delete routes
router.post('/deletestaffs', middlewares.handlers.asyncHandler(staffController.deletestaffs));

module.exports = router;

