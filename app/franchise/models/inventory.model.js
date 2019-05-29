var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var inventoryCategory = require('./inventoryCategory.model');


var inventorySchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    inventorycategory: {
        type: inventoryCategory.schema,
        required: 'inventorycategory is required'
},
    unit: {
        type: String,
        required: 'unit is required'
},
    quantity: {
        type: Number,
        required: 'quantity is required'
},
    totalweight: {
        type: Number,
        required: 'totalweight is required'
},
    franchisecode: {
        type: String,
        required: 'franchisecode is required'
}
    
});


module.exports = mongoose.model('inventory', inventorySchema);
