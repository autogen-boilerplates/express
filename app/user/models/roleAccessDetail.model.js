var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var roleAccessDetailSchema   = new Schema({
        accesslevel: {
        type: String,
        required: 'accesslevel is required'
},
    accesstype: {
        type: String,
        required: 'accesstype is required'
},
    accesspath: {
        type: String,
        required: 'accesspath is required'
}
    
});


module.exports = mongoose.model('roleAccessDetail', roleAccessDetailSchema);
