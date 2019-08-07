var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var settingController = require('../controllers/setting.controller');

// ##########################  setting routes  ##########################
// get routes
router.get('/getsetting/:id', middlewares.handlers.asyncHandler(settingController.getsettingByID));
router.post('/getsettings', middlewares.handlers.asyncHandler(settingController.getsettings));
// update routes
router.post('/updatesetting', middlewares.handlers.asyncHandler(settingController.updatesetting));
// add routes
router.post('/addsettings', middlewares.handlers.asyncHandler(settingController.addsettings));
// delete routes
router.post('/deletesettings', middlewares.handlers.asyncHandler(settingController.deletesettings));

module.exports = router;

