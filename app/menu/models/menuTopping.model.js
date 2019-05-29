var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var toppingIngredient = require('./toppingIngredient.model');


var menuToppingSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    ingredients: {
        type: [toppingIngredient.schema]
},
    price: {
        type: Number,
        required: 'price is required'
},
    quantity: {
        type: Number,
        required: 'quantity is required'
},
    code: {
        type: String,
        required: 'code is required'
}
    
});


module.exports = mongoose.model('menuTopping', menuToppingSchema);
