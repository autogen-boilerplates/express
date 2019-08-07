var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var vendorinventoryitemsController = require('../controllers/vendorinventoryitems.controller');

// ##########################  vendorinventoryitems routes  ##########################
// get routes
router.get('/getvendorinventoryitems/:id', middlewares.handlers.asyncHandler(vendorinventoryitemsController.getvendorinventoryitemsByID));
router.post('/getvendorinventoryitemss', middlewares.handlers.asyncHandler(vendorinventoryitemsController.getvendorinventoryitemss));
// update routes
router.post('/updatevendorinventoryitems', middlewares.handlers.asyncHandler(vendorinventoryitemsController.updatevendorinventoryitems));
// add routes
router.post('/addvendorinventoryitemss', middlewares.handlers.asyncHandler(vendorinventoryitemsController.addvendorinventoryitemss));
// delete routes
router.post('/deletevendorinventoryitemss', middlewares.handlers.asyncHandler(vendorinventoryitemsController.deletevendorinventoryitemss));

module.exports = router;

