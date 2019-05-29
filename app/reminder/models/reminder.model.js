var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Custom validation functions 
//@@CustomValidations@@

//Nested types declarations
var reminderType = require('./reminderType.model');
var reminderCategory = require('./reminderCategory.model');


var reminderSchema   = new Schema({
        title: {
        type: String,
        required: 'title is required'
},
    description: {
        type: String
},
    remind_on: {
        type: Date,
        required: 'remind_on is required'
},
    is_recursive: {
        type: Boolean,
        required: 'is_recursive is required'
},
    frequency: {
        type: String
},
    remindertype: {
        type: reminderType.schema,
        required: 'remindertype is required'
},
    remindercategory: {
        type: reminderCategory.schema,
        required: 'remindercategory is required'
}
    
});


module.exports = mongoose.model('reminder', reminderSchema);
