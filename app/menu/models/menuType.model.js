var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var menuTypeSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    description: {
        type: String
},
    code: {
        type: String,
        required: 'code is required'
}
    
});


module.exports = mongoose.model('menuType', menuTypeSchema);
