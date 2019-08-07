var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var vendorinventoryController = require('../controllers/vendorinventory.controller');

// ##########################  vendorinventory routes  ##########################
// get routes
router.get('/getvendorinventory/:id', middlewares.handlers.asyncHandler(vendorinventoryController.getvendorinventoryByID));
router.post('/getvendorinventorys', middlewares.handlers.asyncHandler(vendorinventoryController.getvendorinventorys));
// update routes
router.post('/updatevendorinventory', middlewares.handlers.asyncHandler(vendorinventoryController.updatevendorinventory));
// add routes
router.post('/addvendorinventorys', middlewares.handlers.asyncHandler(vendorinventoryController.addvendorinventorys));
// delete routes
router.post('/deletevendorinventorys', middlewares.handlers.asyncHandler(vendorinventoryController.deletevendorinventorys));

// custom routes

module.exports = router;
