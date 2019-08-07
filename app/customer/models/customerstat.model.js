var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var customerstatSchema   = new Schema({
	
        totalamountpaid: {
        type: Number ,
		required: 'totalamountpaid is required'
},
			
        totalvisits: {
        type: Number ,
		required: 'totalvisits is required'
},
			
        avgtimespent: {
        type: Number ,
		required: 'avgtimespent is required'
},
			
        avgamountpaid: {
        type: Number ,
		required: 'avgamountpaid is required'
},
			
});

module.exports = mongoose.model('customerstat', customerstatSchema);
		