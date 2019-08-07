var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var billtaxSchema   = new Schema({
	
        taxcode: {
        type: String ,
		required: 'taxcode is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        rate: {
        type: Number ,
		required: 'rate is required'
},
			
});

module.exports = mongoose.model('billtax', billtaxSchema);
		