var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var userTypeController = require('../controllers/userType.controller');

// ##########################  userType routes  ##########################
// get routes
router.get('/getuserType/:id', middlewares.handlers.asyncHandler(userTypeController.getuserTypeByID));
router.post('/getuserTypes', middlewares.handlers.asyncHandler(userTypeController.getuserTypes));
// update routes
router.post('/updateuserType', middlewares.handlers.asyncHandler(userTypeController.updateuserType));
// add routes
router.post('/adduserTypes', middlewares.handlers.asyncHandler(userTypeController.adduserTypes));
// delete routes
router.post('/deleteuserTypes', middlewares.handlers.asyncHandler(userTypeController.deleteuserTypes));

module.exports = router;

