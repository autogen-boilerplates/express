var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var unitController = require('../controllers/unit.controller');

// ##########################  unit routes  ##########################
// get routes
router.get('/getunit/:id', middlewares.handlers.asyncHandler(unitController.getunitByID));
router.post('/getunits', middlewares.handlers.asyncHandler(unitController.getunits));
// update routes
router.post('/updateunit', middlewares.handlers.asyncHandler(unitController.updateunit));
// add routes
router.post('/addunits', middlewares.handlers.asyncHandler(unitController.addunits));
// delete routes
router.post('/deleteunits', middlewares.handlers.asyncHandler(unitController.deleteunits));

// custom routes

module.exports = router;
