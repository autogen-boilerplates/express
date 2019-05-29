var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var roleAccessDetailController = require('../controllers/roleAccessDetail.controller');

// ##########################  roleAccessDetail routes  ##########################
// get routes
router.get('/getroleAccessDetail/:id', middlewares.handlers.asyncHandler(roleAccessDetailController.getroleAccessDetailByID));
router.post('/getroleAccessDetails', middlewares.handlers.asyncHandler(roleAccessDetailController.getroleAccessDetails));
// update routes
router.post('/updateroleAccessDetail', middlewares.handlers.asyncHandler(roleAccessDetailController.updateroleAccessDetail));
// add routes
router.post('/addroleAccessDetails', middlewares.handlers.asyncHandler(roleAccessDetailController.addroleAccessDetails));
// delete routes
router.post('/deleteroleAccessDetails', middlewares.handlers.asyncHandler(roleAccessDetailController.deleteroleAccessDetails));

module.exports = router;

