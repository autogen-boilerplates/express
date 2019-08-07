var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var vendorcategorySchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        description: {
        type: String ,
		required: 'description is required'
},
			
});

module.exports = mongoose.model('vendorcategory', vendorcategorySchema);
		