var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var billcustomerSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        name: {
        type: String ,
		required: 'name is required'
},
			
        mobile: {
        type: Number 
},
			
        email: {
        type: String 
},
			
        address: {
        type: String 
},
			
        isnew: {
        type: Boolean ,
		required: 'isnew is required'
},
			
});

module.exports = mongoose.model('billcustomer', billcustomerSchema);
		