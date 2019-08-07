var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var billcouponSchema   = new Schema({
	
        couponcode: {
        type: String ,
		required: 'couponcode is required'
},
			
        rate: {
        type: Number ,
		required: 'rate is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        ispercent: {
        type: Boolean ,
		required: 'ispercent is required'
},
			
});

module.exports = mongoose.model('billcoupon', billcouponSchema);
		