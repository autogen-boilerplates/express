var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var settingSchema   = new Schema({
        
});


module.exports = mongoose.model('setting', settingSchema);
