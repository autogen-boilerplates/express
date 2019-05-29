var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var billType = require('./billType.model');


var billSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    billtype: {
        type: billType.schema,
        required: 'billtype is required'
},
    amount: {
        type: Number,
        required: 'amount is required'
},
    duedate: {
        type: Date,
        required: 'duedate is required'
},
    billdate: {
        type: Date,
        required: 'billdate is required'
},
    billnumber: {
        type: String,
        required: 'billnumber is required'
},
    franchisecode: {
        type: String,
        required: 'franchisecode is required'
}
    
});


module.exports = mongoose.model('bill', billSchema);
