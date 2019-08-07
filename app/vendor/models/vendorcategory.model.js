var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var vendorcategorySchema   = new Schema({
        code: {
        type: Number,
        required: 'code is required'
},
    description: {
        type: String,
        required: 'description is required'
}
    
});


module.exports = mongoose.model('vendorcategory', vendorcategorySchema);
