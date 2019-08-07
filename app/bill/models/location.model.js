var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var locationSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        description: {
        type: String ,
		required: 'description is required'
},
			
        billnumber: {
        type: Number ,
		required: 'billnumber is required'
},
			
        payableamount: {
        type: Number ,
		required: 'payableamount is required'
},
			
        lastkoton: {
        type: Number ,
		required: 'lastkoton is required'
},
			
        status: {
        type: String ,
		required: 'status is required'
},
			
        type: {
        type: String ,
		required: 'type is required'
},
			
});

module.exports = mongoose.model('location', locationSchema);
		