var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var franchiseController = require('../controllers/franchise.controller');

// ##########################  franchise routes  ##########################
// get routes
router.get('/getfranchise/:id', middlewares.handlers.asyncHandler(franchiseController.getfranchiseByID));
router.post('/getfranchises', middlewares.handlers.asyncHandler(franchiseController.getfranchises));
// update routes
router.post('/updatefranchise', middlewares.handlers.asyncHandler(franchiseController.updatefranchise));
// add routes
router.post('/addfranchises', middlewares.handlers.asyncHandler(franchiseController.addfranchises));
// delete routes
router.post('/deletefranchises', middlewares.handlers.asyncHandler(franchiseController.deletefranchises));

module.exports = router;

