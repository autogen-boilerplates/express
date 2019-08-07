var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations
var vendorcategory = require('./vendorcategory.model');
var vendorinventory = require('./vendorinventory.model');

var vendorSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        category: {
        type: vendorcategory.schema ,
		required: 'category is required'
},
			
        mobile: {
        type: Number 
},
			
        credit: {
        type: Number ,
		required: 'credit is required'
},
			
        maxcredit: {
        type: Number ,
		required: 'maxcredit is required'
},
			
        address: {
        type: String 
},
			
        inventoryitems: {
        type: [vendorinventory.schema] 
},
			
});

module.exports = mongoose.model('vendor', vendorSchema);
		