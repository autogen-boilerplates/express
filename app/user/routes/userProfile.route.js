var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var userProfileController = require('../controllers/userProfile.controller');

// ##########################  userProfile routes  ##########################
// get routes
router.get('/getuserProfile/:id', middlewares.handlers.asyncHandler(userProfileController.getuserProfileByID));
router.post('/getuserProfiles', middlewares.handlers.asyncHandler(userProfileController.getuserProfiles));
// update routes
router.post('/updateuserProfile', middlewares.handlers.asyncHandler(userProfileController.updateuserProfile));
// add routes
router.post('/adduserProfiles', middlewares.handlers.asyncHandler(userProfileController.adduserProfiles));
// delete routes
router.post('/deleteuserProfiles', middlewares.handlers.asyncHandler(userProfileController.deleteuserProfiles));

module.exports = router;

