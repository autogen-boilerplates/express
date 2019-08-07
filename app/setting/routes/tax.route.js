var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var taxController = require('../controllers/tax.controller');

// ##########################  tax routes  ##########################
// get routes
router.get('/gettax/:id', middlewares.handlers.asyncHandler(taxController.gettaxByID));
router.post('/gettaxs', middlewares.handlers.asyncHandler(taxController.gettaxs));
// update routes
router.post('/updatetax', middlewares.handlers.asyncHandler(taxController.updatetax));
// add routes
router.post('/addtaxs', middlewares.handlers.asyncHandler(taxController.addtaxs));
// delete routes
router.post('/deletetaxs', middlewares.handlers.asyncHandler(taxController.deletetaxs));

<<<<<<< HEAD
// custom routes

module.exports = router;
=======
module.exports = router;

>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
