var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var configController = require('../controllers/config.controller');

// ##########################  config routes  ##########################
// get routes
router.get('/getconfig/:id', middlewares.handlers.asyncHandler(configController.getconfigByID));
router.post('/getconfigs', middlewares.handlers.asyncHandler(configController.getconfigs));
// update routes
router.post('/updateconfig', middlewares.handlers.asyncHandler(configController.updateconfig));
// add routes
router.post('/addconfigs', middlewares.handlers.asyncHandler(configController.addconfigs));
// delete routes
router.post('/deleteconfigs', middlewares.handlers.asyncHandler(configController.deleteconfigs));

// custom routes

module.exports = router;
