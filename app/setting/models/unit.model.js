var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
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
