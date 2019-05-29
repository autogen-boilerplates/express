var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var franchiseSchema   = new Schema({
        code: {
        type: String,
        required: 'code is required'
},
    title: {
        type: String,
        required: 'title is required'
},
    description: {
        type: String,
        required: 'description is required'
},
    location: {
        type: String,
        required: 'location is required'
},
    address: {
        type: String,
        required: 'address is required'
},
    contactpersonid: {
        type: String,
        required: 'contactpersonid is required'
},
    isactive: {
        type: Boolean,
        required: 'isactive is required'
},
    ismaster: {
        type: Boolean,
        required: 'ismaster is required'
}
    
});


module.exports = mongoose.model('franchise', franchiseSchema);
