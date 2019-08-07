var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations
var customerstat = require('./customerstat.model');
var customerorder = require('./customerorder.model');

var customerSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        name: {
        type: String ,
		required: 'name is required'
},
			
        email: {
        type: String 
},
			
        mobile: {
        type: String 
},
			
        address: {
        type: String 
},
			
        dob: {
        type: Number 
},
			
        tags: {
        type: String 
},
			
        stats: {
        type: customerstat.schema 
},
			
        orders: {
        type: [customerorder.schema] 
},
			
        createddate: {
        type: Number ,
		required: 'createddate is required'
},
			
});

module.exports = mongoose.model('customer', customerSchema);
		