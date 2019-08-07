
module.exports.getmenus_title_select = function() {
  return { 'code':1,'title':1,'rate':1,'active':1,'menutype.title':1,'quantity':1,'maxquantity':1,'unit':1, } 
};

module.exports.getmenus_title_filter = function( title,) {
  return { 'title': title,}
};
	
module.exports.getmenudetails_code_select = function() {
  return { 'code':1,'title':1,'rate':1,'active':1,'images?':1,'type':1,'ingredients?':1,'toppings?':1,'wastage':1,'quantity':1,'maxquantity':1,'unit':1,'preparationdetails?':1, } 
};

module.exports.getmenudetails_code_filter = function( code,) {
  return { 'code': code,}
};
	
