var express = require('express');
var router = express.Router();

router.use('/', require('./franchise.route'));

router.use('/staff', require('./staff.route'));

router.use('/bill', require('./bill.route'));

router.use('/billType', require('./billType.route'));

router.use('/sale', require('./sale.route'));

router.use('/saleType', require('./saleType.route'));

router.use('/saleCategory', require('./saleCategory.route'));

router.use('/cartItem', require('./cartItem.route'));

router.use('/paymentMode', require('./paymentMode.route'));

router.use('/paymentDetail', require('./paymentDetail.route'));

router.use('/saleTax', require('./saleTax.route'));

router.use('/deliveryStatus', require('./deliveryStatus.route'));

router.use('/expense', require('./expense.route'));

router.use('/expenseType', require('./expenseType.route'));

router.use('/expenseCategory', require('./expenseCategory.route'));

router.use('/paymentMode', require('./paymentMode.route'));

router.use('/paymentDetail', require('./paymentDetail.route'));

router.use('/purchase', require('./purchase.route'));

router.use('/purchaseType', require('./purchaseType.route'));

router.use('/purchaseCategory', require('./purchaseCategory.route'));

router.use('/inventory', require('./inventory.route'));

router.use('/inventoryCategory', require('./inventoryCategory.route'));



module.exports = router;