var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var menuIngredient = require('./menuIngredient.model');
var menuType = require('./menuType.model');
var menuCategory = require('./menuCategory.model');
var menuTopping = require('./menuTopping.model');


var menuSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    code: {
        type: String,
        required: 'code is required'
},
    price: {
        type: Number,
        required: 'price is required'
},
    is_fav: {
        type: Boolean,
        required: 'is_fav is required'
},
    prep_time: {
        type: Date,
        required: 'prep_time is required'
},
    menuingredients: {
        type: [menuIngredient.schema]
},
    menutype: {
        type: menuType.schema,
        required: 'menutype is required'
},
    menucategories: {
        type: [menuCategory.schema],
        required: 'menucategories is required'
},
    menutoppings: {
        type: [menuTopping.schema]
},
    image: {
        type: String,
        required: 'image is required'
}
    
});


module.exports = mongoose.model('menu', menuSchema);
