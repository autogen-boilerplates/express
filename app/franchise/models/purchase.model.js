var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var purchaseType = require('./purchaseType.model');
var purchaseCategory = require('./purchaseCategory.model');


var purchaseSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    description: {
        type: String
},
    quantity: {
        type: Number,
        required: 'quantity is required'
},
    totalweight: {
        type: Number,
        required: 'totalweight is required'
},
    unit: {
        type: String,
        required: 'unit is required'
},
    purchasedbyid: {
        type: String,
        required: 'purchasedbyid is required'
},
    vendorid: {
        type: String,
        required: 'vendorid is required'
},
    totalprice: {
        type: Number,
        required: 'totalprice is required'
},
    franchisecode: {
        type: String,
        required: 'franchisecode is required'
},
    purchasetype: {
        type: purchaseType.schema,
        required: 'purchasetype is required'
},
    purchasecategory: {
        type: purchaseCategory.schema,
        required: 'purchaseCategory is required'
}
    
});


module.exports = mongoose.model('purchase', purchaseSchema);
