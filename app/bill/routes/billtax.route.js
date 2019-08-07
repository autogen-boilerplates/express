var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billtaxController = require('../controllers/billtax.controller');

// ##########################  billtax routes  ##########################
// get routes
router.get('/getbilltax/:id', middlewares.handlers.asyncHandler(billtaxController.getbilltaxByID));
router.post('/getbilltaxs', middlewares.handlers.asyncHandler(billtaxController.getbilltaxs));
// update routes
router.post('/updatebilltax', middlewares.handlers.asyncHandler(billtaxController.updatebilltax));
// add routes
router.post('/addbilltaxs', middlewares.handlers.asyncHandler(billtaxController.addbilltaxs));
// delete routes
router.post('/deletebilltaxs', middlewares.handlers.asyncHandler(billtaxController.deletebilltaxs));

// custom routes

router.post('/getbills_all', middlewares.handlers.asyncHandler(billtaxController.getbills_all));

router.post('/getbills_date', middlewares.handlers.asyncHandler(billtaxController.getbills_date));

router.post('/getbilldetails', middlewares.handlers.asyncHandler(billtaxController.getbilldetails));

router.post('/getbills_number_customer', middlewares.handlers.asyncHandler(billtaxController.getbills_number_customer));

router.post('/getbills_location', middlewares.handlers.asyncHandler(billtaxController.getbills_location));

module.exports = router;
