var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var menuIngredientSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    code: {
        type: String,
        required: 'code is required'
},
    description: {
        type: String
},
    unit: {
        type: String,
        required: 'unit is required'
},
    avgquantity: {
        type: Number,
        required: 'avgquantity is required'
},
    inventoryid: {
        type: String,
        required: 'inventoryid is required'
}
    
});


module.exports = mongoose.model('menuIngredient', menuIngredientSchema);
