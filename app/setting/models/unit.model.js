var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
<<<<<<< HEAD

//Nested types declarations

var unitSchema   = new Schema({
	
        code: {
        type: String ,
		required: 'code is required'
},
			
        title: {
        type: String ,
		required: 'title is required'
},
			
        parentunitcode: {
        type: String ,
		required: 'parentunitcode is required'
},
			
        parentunitrate: {
        type: Number ,
		required: 'parentunitrate is required'
},
			
        subunitcode: {
        type: String ,
		required: 'subunitcode is required'
},
			
        subunitrate: {
        type: Number ,
		required: 'subunitrate is required'
},
			
});

module.exports = mongoose.model('unit', unitSchema);
		
=======
//@@CustomValidations@@

//Nested types declarations


var unitSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    description: {
        type: String
},
    isactive: {
        type: Boolean,
        required: 'isactive is required'
}
    
});


module.exports = mongoose.model('unit', unitSchema);
>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
