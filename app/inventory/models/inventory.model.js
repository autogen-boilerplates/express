var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations
var inventorytype = require('./inventorytype.model');
var inventorycategory = require('./inventorycategory.model');

var inventorySchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        type: {
        type: inventorytype.schema ,
		required: 'type is required'
},
			
        category: {
        type: inventorycategory.schema ,
		required: 'category is required'
},
			
        quantity: {
        type: Number ,
		required: 'quantity is required'
},
			
        maxquantity: {
        type: Number ,
		required: 'maxquantity is required'
},
			
        unitcode: {
        type: String ,
		required: 'unitcode is required'
},
			
        expirydate: {
        type: Number ,
		required: 'expirydate is required'
},
			
        isactionable: {
        type: Boolean ,
		required: 'isactionable is required'
},
			
        actionlink: {
        type: String 
},
			
        active: {
        type: Boolean ,
		required: 'active is required'
},
			
        price: {
        type: Number ,
		required: 'price is required'
},
			
});

module.exports = mongoose.model('inventory', inventorySchema);
		