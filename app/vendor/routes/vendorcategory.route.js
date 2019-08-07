var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var vendorcategoryController = require('../controllers/vendorcategory.controller');

// ##########################  vendorcategory routes  ##########################
// get routes
router.get('/getvendorcategory/:id', middlewares.handlers.asyncHandler(vendorcategoryController.getvendorcategoryByID));
router.post('/getvendorcategorys', middlewares.handlers.asyncHandler(vendorcategoryController.getvendorcategorys));
// update routes
router.post('/updatevendorcategory', middlewares.handlers.asyncHandler(vendorcategoryController.updatevendorcategory));
// add routes
router.post('/addvendorcategorys', middlewares.handlers.asyncHandler(vendorcategoryController.addvendorcategorys));
// delete routes
router.post('/deletevendorcategorys', middlewares.handlers.asyncHandler(vendorcategoryController.deletevendorcategorys));

module.exports = router;

