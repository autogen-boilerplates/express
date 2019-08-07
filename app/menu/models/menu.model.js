var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations
var menutype = require('./menutype.model');
var menuingredient = require('./menuingredient.model');
var menuingredient = require('./menuingredient.model');
var menupreparation = require('./menupreparation.model');

var menuSchema   = new Schema({
	
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
			
        images: {
        type: [String] 
},
			
        type: {
        type: menutype.schema ,
		required: 'type is required'
},
			
        ingredients: {
        type: [menuingredient.schema] 
},
			
        toppings: {
        type: [menuingredient.schema] 
},
			
        wastage: {
        type: Number ,
		required: 'wastage is required'
},
			
        quantity: {
        type: Number ,
		required: 'quantity is required'
},
			
        maxquantity: {
        type: Number ,
		required: 'maxquantity is required'
},
			
        unit: {
        type: String ,
		required: 'unit is required'
},
			
        preparationdetails: {
        type: menupreparation.schema 
},
			
});

module.exports = mongoose.model('menu', menuSchema);
		
