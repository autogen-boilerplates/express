var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var expenseType = require('./expenseType.model');
var expenseCategory = require('./expenseCategory.model');
var paymentMode = require('./paymentMode.model');
var paymentDetail = require('./paymentDetail.model');


var expenseSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    expensetype: {
        type: expenseType.schema,
        required: 'expensetype is required'
},
    expensecategory: {
        type: expenseCategory.schema,
        required: 'expensecategory is required'
},
    amount: {
        type: Number,
        required: 'amount is required'
},
    paidby: {
        type: String
},
    paidto: {
        type: String
},
    paymentmode: {
        type: paymentMode.schema,
        required: 'paymentmode is required'
},
    paymentdetail: {
        type: paymentDetail.schema
},
    franchisecode: {
        type: String,
        required: 'franchisecode is required'
}
    
});


module.exports = mongoose.model('expense', expenseSchema);
