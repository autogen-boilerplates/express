var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var tableController = require('../controllers/table.controller');

// ##########################  table routes  ##########################
// get routes
router.get('/gettable/:id', middlewares.handlers.asyncHandler(tableController.gettableByID));
router.post('/gettables', middlewares.handlers.asyncHandler(tableController.gettables));
// update routes
router.post('/updatetable', middlewares.handlers.asyncHandler(tableController.updatetable));
// add routes
router.post('/addtables', middlewares.handlers.asyncHandler(tableController.addtables));
// delete routes
router.post('/deletetables', middlewares.handlers.asyncHandler(tableController.deletetables));

module.exports = router;

