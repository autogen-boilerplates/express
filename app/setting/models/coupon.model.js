var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var couponSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        discount: {
        type: Number ,
		required: 'discount is required'
},
			
        validfrom: {
        type: Number ,
		required: 'validfrom is required'
},
			
        validto: {
        type: Number ,
		required: 'validto is required'
},
			
        ispercent: {
        type: Boolean ,
		required: 'ispercent is required'
},
			
});

module.exports = mongoose.model('coupon', couponSchema);
		