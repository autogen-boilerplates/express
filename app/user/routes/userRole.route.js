var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var userRoleController = require('../controllers/userRole.controller');

// ##########################  userRole routes  ##########################
// get routes
router.get('/getuserRole/:id', middlewares.handlers.asyncHandler(userRoleController.getuserRoleByID));
router.post('/getuserRoles', middlewares.handlers.asyncHandler(userRoleController.getuserRoles));
// update routes
router.post('/updateuserRole', middlewares.handlers.asyncHandler(userRoleController.updateuserRole));
// add routes
router.post('/adduserRoles', middlewares.handlers.asyncHandler(userRoleController.adduserRoles));
// delete routes
router.post('/deleteuserRoles', middlewares.handlers.asyncHandler(userRoleController.deleteuserRoles));

module.exports = router;

