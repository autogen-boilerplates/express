var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations


var paymentDetailSchema   = new Schema({
        couponcode: {
        type: String
},
    banktrnid: {
        type: String
},
    payercardnumber: {
        type: Number
},
    payerupi: {
        type: String
},
    payerbanknumber: {
        type: Number
},
    payerbankname: {
        type: String
},
    payerbankbranch: {
        type: String
},
    payerifsccode: {
        type: Number
},
    recvupi: {
        type: String
},
    recvbanknumber: {
        type: Number
},
    recvbankname: {
        type: String
},
    recvbranch: {
        type: String
},
    recvifsc: {
        type: String
},
    payername: {
        type: String
},
    recvname: {
        type: String
},
    payermobile: {
        type: String
},
    receivermobile: {
        type: String
}
    
});


module.exports = mongoose.model('paymentDetail', paymentDetailSchema);
