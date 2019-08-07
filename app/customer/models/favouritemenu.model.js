var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var favouritemenuSchema   = new Schema({
        menucode: {
        type: Number,
        required: 'menucode is required'
},
    title: {
        type: String,
        required: 'title is required'
},
    toppings: {
        type: String
},
    notes: {
        type: String
}
    
});


module.exports = mongoose.model('favouritemenu', favouritemenuSchema);
