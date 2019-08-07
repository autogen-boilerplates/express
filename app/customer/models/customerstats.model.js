var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var customerstatsSchema   = new Schema({
        totalamtpaid: {
        type: Number
},
    totalvisits: {
        type: Number
},
    avgtimespent: {
        type: Number
},
    avgamountpaid: {
        type: Number
}
    
});


module.exports = mongoose.model('customerstats', customerstatsSchema);
