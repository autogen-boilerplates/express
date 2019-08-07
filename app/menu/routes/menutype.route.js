var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var menutypeController = require('../controllers/menutype.controller');

// ##########################  menutype routes  ##########################
// get routes
router.get('/getmenutype/:id', middlewares.handlers.asyncHandler(menutypeController.getmenutypeByID));
router.post('/getmenutypes', middlewares.handlers.asyncHandler(menutypeController.getmenutypes));
// update routes
router.post('/updatemenutype', middlewares.handlers.asyncHandler(menutypeController.updatemenutype));
// add routes
router.post('/addmenutypes', middlewares.handlers.asyncHandler(menutypeController.addmenutypes));
// delete routes
router.post('/deletemenutypes', middlewares.handlers.asyncHandler(menutypeController.deletemenutypes));

// custom routes

router.post('/getmenus_title', middlewares.handlers.asyncHandler(menutypeController.getmenus_title));

router.post('/getmenudetails_code', middlewares.handlers.asyncHandler(menutypeController.getmenudetails_code));

module.exports = router;
