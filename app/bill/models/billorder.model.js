var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var billorderSchema   = new Schema({
	
        menucode: {
        type: String ,
		required: 'menucode is required'
},
			
        menutitle: {
        type: String ,
		required: 'menutitle is required'
},
			
        rate: {
        type: Number ,
		required: 'rate is required'
},
			
        quantity: {
        type: Number ,
		required: 'quantity is required'
},
			
        kot: {
        type: Number ,
		required: 'kot is required'
},
			
});

module.exports = mongoose.model('billorder', billorderSchema);
		