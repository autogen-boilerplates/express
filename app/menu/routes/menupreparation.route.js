var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var menupreparationController = require('../controllers/menupreparation.controller');

// ##########################  menupreparation routes  ##########################
// get routes
router.get('/getmenupreparation/:id', middlewares.handlers.asyncHandler(menupreparationController.getmenupreparationByID));
router.post('/getmenupreparations', middlewares.handlers.asyncHandler(menupreparationController.getmenupreparations));
// update routes
router.post('/updatemenupreparation', middlewares.handlers.asyncHandler(menupreparationController.updatemenupreparation));
// add routes
router.post('/addmenupreparations', middlewares.handlers.asyncHandler(menupreparationController.addmenupreparations));
// delete routes
router.post('/deletemenupreparations', middlewares.handlers.asyncHandler(menupreparationController.deletemenupreparations));

// custom routes

module.exports = router;

