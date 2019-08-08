var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var configSchema   = new Schema({
	
        key: {
        type: String ,
		required: 'key is required'
},
			
        value: {
        type: String ,
		required: 'value is required'
},
			
});

module.exports = mongoose.model('config', configSchema);
		