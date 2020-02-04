var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var taxSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        rate: {
        type: Number ,
		required: 'rate is required'
},
			
        active: {
        type: Boolean ,
		required: 'active is required'
},
			
});

module.exports = mongoose.model('tax', taxSchema);
		