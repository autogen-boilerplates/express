var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var unitSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        parentunitcode: {
        type: String ,
		required: 'parentunitcode is required'
},
			
        parentunitrate: {
        type: Number ,
		required: 'parentunitrate is required'
},
			
        subunitcode: {
        type: String ,
		required: 'subunitcode is required'
},
			
        subunitrate: {
        type: Number ,
		required: 'subunitrate is required'
},
			
});

module.exports = mongoose.model('unit', unitSchema);
		
