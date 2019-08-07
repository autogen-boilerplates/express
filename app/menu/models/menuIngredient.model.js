var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var menuingredientSchema   = new Schema({
	
        ingredientcode: {
        type: String ,
		required: 'ingredientcode is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        quantity: {
        type: Number ,
		required: 'quantity is required'
},
			
        rate: {
        type: Number ,
		required: 'rate is required'
},
			
        wastage: {
        type: Number ,
		required: 'wastage is required'
},
			
        unitcode: {
        type: String ,
		required: 'unitcode is required'
},
			
});

module.exports = mongoose.model('menuingredient', menuingredientSchema);
		