var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var tableSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    token: {
        type: String
},
    color: {
        type: String
},
    isselected: {
        type: Boolean,
        required: 'isselected is required'
},
    code: {
        type: String,
        required: 'code is required'
}
    
});


module.exports = mongoose.model('table', tableSchema);
