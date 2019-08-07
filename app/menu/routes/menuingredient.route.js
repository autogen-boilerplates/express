var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var menuIngredientController = require('../controllers/menuIngredient.controller');

// ##########################  menuIngredient routes  ##########################
// get routes
router.get('/getmenuIngredient/:id', middlewares.handlers.asyncHandler(menuIngredientController.getmenuIngredientByID));
router.post('/getmenuIngredients', middlewares.handlers.asyncHandler(menuIngredientController.getmenuIngredients));
// update routes
router.post('/updatemenuIngredient', middlewares.handlers.asyncHandler(menuIngredientController.updatemenuIngredient));
// add routes
router.post('/addmenuIngredients', middlewares.handlers.asyncHandler(menuIngredientController.addmenuIngredients));
// delete routes
router.post('/deletemenuIngredients', middlewares.handlers.asyncHandler(menuIngredientController.deletemenuIngredients));

module.exports = router;

