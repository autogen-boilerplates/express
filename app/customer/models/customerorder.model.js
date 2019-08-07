var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var customerorderSchema   = new Schema({
	
        menucode: {
        type: String ,
		required: 'menucode is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        toppings: {
        type: String ,
		required: 'toppings is required'
},
			
        notes: {
        type: String ,
		required: 'notes is required'
},
			
        billnumber: {
        type: Number ,
		required: 'billnumber is required'
},
			
        paymentstatus: {
        type: String ,
		required: 'paymentstatus is required'
},
			
        billamount: {
        type: Number ,
		required: 'billamount is required'
},
			
});

module.exports = mongoose.model('customerorder', customerorderSchema);
		