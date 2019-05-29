var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var userProfile = require('./userProfile.model');
var userRole = require('./userRole.model');
var userType = require('./userType.model');


var userSchema   = new Schema({
        name: {
        type: String,
        required: 'name is required'
},
    mobile: {
        type: Number,
        required: 'mobile is required'
},
    addresses: {
        type: String
},
    userprofile: {
        type: userProfile.schema
},
    userrole: {
        type: userRole.schema
},
    usertype: {
        type: userType.schema,
        required: 'usertype is required'
},
    email: {
        type: String,
        required: 'email is required'
},
    password: {
        type: String,
        required: 'password is required'
}
    
});


module.exports = mongoose.model('user', userSchema);
