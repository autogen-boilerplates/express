var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations
var billtype = require('./billtype.model');
var billorder = require('./billorder.model');
var billcustomer = require('./billcustomer.model');
var billpayment = require('./billpayment.model');
var billcoupon = require('./billcoupon.model');
var billtax = require('./billtax.model');

var billSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        location: {
        type: String ,
		required: 'location is required'
},
			
        type: {
        type: billtype.schema ,
		required: 'type is required'
},
			
        billnumber: {
        type: Number ,
		required: 'billnumber is required'
},
			
        orders: {
        type: [billorder.schema] ,
		required: 'orders is required'
},
			
        customerdetails: {
        type: billcustomer.schema 
},
			
        paymentdetails: {
        type: [billpayment.schema] 
},
			
        paymentstatus: {
        type: String ,
		required: 'paymentstatus is required'
},
			
        coupons: {
        type: [billcoupon.schema] 
},
			
        taxes: {
        type: [billtax.schema] 
},
			
        billamount: {
        type: Number ,
		required: 'billamount is required'
},
			
        payableamount: {
        type: Number ,
		required: 'payableamount is required'
},
			
        billdate: {
        type: Number ,
		required: 'billdate is required'
},
			
});

module.exports = mongoose.model('bill', billSchema);
		