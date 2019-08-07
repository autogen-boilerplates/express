var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
<<<<<<< HEAD

//Nested types declarations

var taxSchema   = new Schema({
	
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
			
});

module.exports = mongoose.model('tax', taxSchema);
		
=======
//@@CustomValidations@@

//Nested types declarations


var taxSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    description: {
        type: String
},
    rate: {
        type: Number,
        required: 'rate is required'
},
    isactive: {
        type: Boolean,
        required: 'isactive is required'
}
    
});


module.exports = mongoose.model('tax', taxSchema);
>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
