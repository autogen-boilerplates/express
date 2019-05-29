var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var saleType = require('./saleType.model');
var saleCategory = require('./saleCategory.model');
var cartItem = require('./cartItem.model');
var saleTax = require('./saleTax.model');
var paymentMode = require('./paymentMode.model');
var paymentDetail = require('./paymentDetail.model');


var saleSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    saletype: {
        type: saleType.schema,
        required: 'saletype is required'
},
    salecategory: {
        type: saleCategory.schema,
        required: 'salecategory is required'
},
    cart: {
        type: [cartItem.schema],
        required: 'cart is required'
},
    taxes: {
        type: saleTax.schema
},
    total: {
        type: Number,
        required: 'total is required'
},
    paymentmode: {
        type: paymentMode.schema,
        required: 'paymentmode is required'
},
    paymentdetails: {
        type: [paymentDetail.schema],
        required: 'paymentdetails is required'
},
    discount: {
        type: Number,
        required: 'discount is required'
},
    customerid: {
        type: String
},
    franchisecode: {
        type: String,
        required: 'franchisecode is required'
},
    tablecode: {
        type: String
},
    isdeleted: {
        type: Boolean,
        required: 'isdeleted is required'
},
    note: {
        type: String
},
    saleid: {
        type: String,
        required: 'saleid is required'
},
    createddate: {
        type: Date,
        required: 'createddate is required'
},
    updateddate: {
        type: Date
},
    ispending: {
        type: Boolean,
        required: 'ispending is required'
},
    pack: {
        type: Number,
        required: 'pack is required'
}
    
});


module.exports = mongoose.model('sale', saleSchema);
