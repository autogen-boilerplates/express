var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var inventorycategoryController = require('../controllers/inventorycategory.controller');

// ##########################  inventorycategory routes  ##########################
// get routes
router.get('/getinventorycategory/:id', middlewares.handlers.asyncHandler(inventorycategoryController.getinventorycategoryByID));
router.post('/getinventorycategorys', middlewares.handlers.asyncHandler(inventorycategoryController.getinventorycategorys));
// update routes
router.post('/updateinventorycategory', middlewares.handlers.asyncHandler(inventorycategoryController.updateinventorycategory));
// add routes
router.post('/addinventorycategorys', middlewares.handlers.asyncHandler(inventorycategoryController.addinventorycategorys));
// delete routes
router.post('/deleteinventorycategorys', middlewares.handlers.asyncHandler(inventorycategoryController.deleteinventorycategorys));

// custom routes

module.exports = router;
