var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var menuTypeController = require('../controllers/menuType.controller');

// ##########################  menuType routes  ##########################
// get routes
router.get('/getmenuType/:id', middlewares.handlers.asyncHandler(menuTypeController.getmenuTypeByID));
router.post('/getmenuTypes', middlewares.handlers.asyncHandler(menuTypeController.getmenuTypes));
// update routes
router.post('/updatemenuType', middlewares.handlers.asyncHandler(menuTypeController.updatemenuType));
// add routes
router.post('/addmenuTypes', middlewares.handlers.asyncHandler(menuTypeController.addmenuTypes));
// delete routes
router.post('/deletemenuTypes', middlewares.handlers.asyncHandler(menuTypeController.deletemenuTypes));

module.exports = router;

