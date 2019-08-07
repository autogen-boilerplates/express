var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var favouritemenuController = require('../controllers/favouritemenu.controller');

// ##########################  favouritemenu routes  ##########################
// get routes
router.get('/getfavouritemenu/:id', middlewares.handlers.asyncHandler(favouritemenuController.getfavouritemenuByID));
router.post('/getfavouritemenus', middlewares.handlers.asyncHandler(favouritemenuController.getfavouritemenus));
// update routes
router.post('/updatefavouritemenu', middlewares.handlers.asyncHandler(favouritemenuController.updatefavouritemenu));
// add routes
router.post('/addfavouritemenus', middlewares.handlers.asyncHandler(favouritemenuController.addfavouritemenus));
// delete routes
router.post('/deletefavouritemenus', middlewares.handlers.asyncHandler(favouritemenuController.deletefavouritemenus));

module.exports = router;

