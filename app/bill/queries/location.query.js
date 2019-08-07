
module.exports.getbills_location_select = function() {
  return { 'code':1,'title':1,'description':1,'billnumber':1,'payableamount':1,'lastkoton':1,'status':1, } 
};

module.exports.getbills_location_filter = function( location,) {
  return { 'location': location,}
};
	