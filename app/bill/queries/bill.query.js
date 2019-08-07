
module.exports.getbills_all_select = function() {
  return { 'billnumber':1,'customerdetails.name':1,'paymentstatus':1,'payableamount':1,'billdate':1, } 
};

module.exports.getbills_all_filter = function( ) {
  return {}
};
	
module.exports.getbills_date_select = function() {
  return { 'billnumber':1,'customerdetails.name':1,'paymentstatus':1,'payableamount':1,'billdate':1, } 
};

module.exports.getbills_date_filter = function( startdate,enddate,) {
  return { 'billdate': {$gte: startdate,$lte: enddate,},}
};
	
module.exports.getbilldetails_select = function() {
  return { 'location':1,'billnumber':1,'orders':1,'coupons?':1,'taxes?':1,'billamount':1,'payableamount':1, } 
};

module.exports.getbilldetails_filter = function( billnumber,) {
  return { 'billnumber': billnumber,}
};
	
module.exports.getbills_number_customer_select = function() {
  return { 'billnumber':1,'customerdetails.name':1,'paymentstatus':1,'payableamount':1,'billdate':1, } 
};

module.exports.getbills_number_customer_filter = function( billnumber,customer,) {
  return {$or: [ { 'billnumber': billnumber, },  { 'customerdetails.name': customer, }, ]}
};
	