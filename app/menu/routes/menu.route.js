var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var menuController = require('../controllers/menu.controller');

// ##########################  menu routes  ##########################
// get routes
router.get('/getmenu/:id', middlewares.handlers.asyncHandler(menuController.getmenuByID));
router.post('/getmenus', middlewares.handlers.asyncHandler(menuController.getmenus));
// update routes
router.post('/updatemenu', middlewares.handlers.asyncHandler(menuController.updatemenu));
// add routes
router.post('/addmenus', middlewares.handlers.asyncHandler(menuController.addmenus));
// delete routes
router.post('/deletemenus', middlewares.handlers.asyncHandler(menuController.deletemenus));

<<<<<<< HEAD
// custom routes

router.post('/getmenus_title', middlewares.handlers.asyncHandler(menuController.getmenus_title));

router.post('/getmenudetails_code', middlewares.handlers.asyncHandler(menuController.getmenudetails_code));

module.exports = router;
=======
module.exports = router;

>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
