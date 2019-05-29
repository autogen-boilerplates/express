var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var toppingIngredientController = require('../controllers/toppingIngredient.controller');

// ##########################  toppingIngredient routes  ##########################
// get routes
router.get('/gettoppingIngredient/:id', middlewares.handlers.asyncHandler(toppingIngredientController.gettoppingIngredientByID));
router.post('/gettoppingIngredients', middlewares.handlers.asyncHandler(toppingIngredientController.gettoppingIngredients));
// update routes
router.post('/updatetoppingIngredient', middlewares.handlers.asyncHandler(toppingIngredientController.updatetoppingIngredient));
// add routes
router.post('/addtoppingIngredients', middlewares.handlers.asyncHandler(toppingIngredientController.addtoppingIngredients));
// delete routes
router.post('/deletetoppingIngredients', middlewares.handlers.asyncHandler(toppingIngredientController.deletetoppingIngredients));

module.exports = router;

