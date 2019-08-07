var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var billpaymentSchema   = new Schema({
	
        paymentid: {
        type: String ,
		required: 'paymentid is required'
},
			
        paymentmode: {
        type: String ,
		required: 'paymentmode is required'
},
			
        payername: {
        type: String ,
		required: 'payername is required'
},
			
        amount: {
        type: Number ,
		required: 'amount is required'
},
			
        paymentdate: {
        type: Number ,
		required: 'paymentdate is required'
},
			
        paymentstatus: {
        type: String ,
		required: 'paymentstatus is required'
},
			
});

module.exports = mongoose.model('billpayment', billpaymentSchema);
		