var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var saleTaxSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
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


module.exports = mongoose.model('saleTax', saleTaxSchema);
