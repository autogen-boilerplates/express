var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var vendorinventorySchema   = new Schema({
	
        inventorycode: {
        type: String ,
		required: 'inventorycode is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        availablequantity: {
        type: Number ,
		required: 'availablequantity is required'
},
			
        rate: {
        type: Number ,
		required: 'rate is required'
},
			
        unitcode: {
        type: String ,
		required: 'unitcode is required'
},
			
});

module.exports = mongoose.model('vendorinventory', vendorinventorySchema);
		