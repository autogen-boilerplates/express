var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var userController = require('../controllers/user.controller');

// ##########################  user routes  ##########################
// get routes
router.get('/getuser/:id', middlewares.handlers.asyncHandler(userController.getuserByID));
router.post('/getusers', middlewares.handlers.asyncHandler(userController.getusers));
// update routes
router.post('/updateuser', middlewares.handlers.asyncHandler(userController.updateuser));
// add routes
router.post('/addusers', middlewares.handlers.asyncHandler(userController.addusers));
// delete routes
router.post('/deleteusers', middlewares.handlers.asyncHandler(userController.deleteusers));


// custom routes
// TODO : use mongoose validation to validate the input data from client
router.post('/login', middlewares.handlers.asyncHandler(userController.loginUser));
router.post('/register', middlewares.handlers.asyncHandler(userController.registerUser));
router.post('/logout', userController.logoutUser);


module.exports = router;

