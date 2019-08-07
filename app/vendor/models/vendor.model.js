var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var vendorcategory = require('./vendorcategory.model');
var vendorinventoryitems = require('./vendorinventoryitems.model');


var vendorSchema   = new Schema({
        code: {
        type: Number,
        required: 'code is required'
},
    title: {
        type: String,
        required: 'title is required'
},
    category: {
        type: vendorcategory.schema,
        required: 'category is required'
},
    mobile: {
        type: Number
},
    email: {
        type: String
},
    credit: {
        type: Number,
        required: 'credit is required'
},
    maxcredit: {
        type: Number,
        required: 'maxcredit is required'
},
    address: {
        type: String
},
    vendorinventoryitems: {
        type: vendorinventoryitems.schema
},
    isactive: {
        type: Boolean,
        required: 'isactive is required'
}
    
});


module.exports = mongoose.model('vendor', vendorSchema);
