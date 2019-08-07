var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var vendorinventoryitemsSchema   = new Schema({
        inventorycode: {
        type: Number,
        required: 'inventorycode is required'
},
    title: {
        type: String,
        required: 'title is required'
},
    isavailable: {
        type: Boolean,
        required: 'isavailable is required'
},
    rate: {
        type: Number,
        required: 'rate is required'
}
    
});


module.exports = mongoose.model('vendorinventoryitems', vendorinventoryitemsSchema);
