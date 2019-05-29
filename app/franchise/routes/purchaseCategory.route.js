var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var purchaseCategoryController = require('../controllers/purchaseCategory.controller');

// ##########################  purchaseCategory routes  ##########################
// get routes
router.get('/getpurchaseCategory/:id', middlewares.handlers.asyncHandler(purchaseCategoryController.getpurchaseCategoryByID));
router.post('/getpurchaseCategorys', middlewares.handlers.asyncHandler(purchaseCategoryController.getpurchaseCategorys));
// update routes
router.post('/updatepurchaseCategory', middlewares.handlers.asyncHandler(purchaseCategoryController.updatepurchaseCategory));
// add routes
router.post('/addpurchaseCategorys', middlewares.handlers.asyncHandler(purchaseCategoryController.addpurchaseCategorys));
// delete routes
router.post('/deletepurchaseCategorys', middlewares.handlers.asyncHandler(purchaseCategoryController.deletepurchaseCategorys));

module.exports = router;

