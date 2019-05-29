var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var userProfileSchema   = new Schema({
        email: {
        type: String
},
    dob: {
        type: Date
},
    mobile: {
        type: Number,
        required: 'mobile is required'
},
    designation: {
        type: String,
        required: 'designation is required'
},
    martitalstatus: {
        type: String,
        required: 'martitalstatus is required'
}
    
});


module.exports = mongoose.model('userProfile', userProfileSchema);
