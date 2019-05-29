var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var deliveryStatus = require('./deliveryStatus.model');


var cartItemSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    menucode: {
        type: String,
        required: 'menucode is required'
},
    quantity: {
        type: Number,
        required: 'quantity is required'
},
    price: {
        type: Number,
        required: 'price is required'
},
    deliverystatus: {
        type: deliveryStatus.schema,
        required: 'deliverystatus is required'
},
    ordertime: {
        type: Date,
        required: 'ordertime is required'
},
    deliveredby: {
        type: String
},
    deliveredto: {
        type: String
},
    preparedby: {
        type: String
},
    deliverytime: {
        type: Date,
        required: 'deliverytime is required'
},
    isdeleted: {
        type: Boolean,
        required: 'isdeleted is required'
},
    createddate: {
        type: Date
},
    updateddate: {
        type: Date
}
    
});


module.exports = mongoose.model('cartItem', cartItemSchema);
