var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 

//Nested types declarations

var menupreparationSchema   = new Schema({
	
        preparationtime: {
        type: Number ,
		required: 'preparationtime is required'
},
			
        preparationcost: {
        type: Number ,
		required: 'preparationcost is required'
},
			
        procedure: {
        type: String ,
		required: 'procedure is required'
},
			
        packaging: {
        type: String ,
		required: 'packaging is required'
},
			
        packagingtime: {
        type: Number ,
		required: 'packagingtime is required'
},
			
        packagingcost: {
        type: Number ,
		required: 'packagingcost is required'
},
			
});

module.exports = mongoose.model('menupreparation', menupreparationSchema);
		