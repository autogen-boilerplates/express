var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var menuingredientController = require('../controllers/menuingredient.controller');

// ##########################  menuingredient routes  ##########################
// get routes
router.get('/getmenuingredient/:id', middlewares.handlers.asyncHandler(menuingredientController.getmenuingredientByID));
router.post('/getmenuingredients', middlewares.handlers.asyncHandler(menuingredientController.getmenuingredients));
// update routes
router.post('/updatemenuingredient', middlewares.handlers.asyncHandler(menuingredientController.updatemenuingredient));
// add routes
router.post('/addmenuingredients', middlewares.handlers.asyncHandler(menuingredientController.addmenuingredients));
// delete routes
router.post('/deletemenuingredients', middlewares.handlers.asyncHandler(menuingredientController.deletemenuingredients));

// custom routes

module.exports = router;

