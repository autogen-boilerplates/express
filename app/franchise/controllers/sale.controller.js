var sale = require('../models/sale.model')
var queries = require('../queries/index.query')

module.exports.getsaleByID = async function(req,res,next) {
    try {   
        id = req.params.id;
        
        if(id == null || id == undefined)
            return res.sendStatus(400);
        
        const result = await sale.findOne(queries.common.getbyid(id)).select(queries.sale.getbyid_select());
        return res.json(result);        
    } catch (error) {
        next(error) 
    }    
}

module.exports.getsales = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await sale.find(condition);
        return res.json(result);        
    } catch (error) {        
        next(error) 
    }    
}

module.exports.addsales = async function(req,res,next) {
    try { 
        
        data = req.body;                   
        if(data == null || data == undefined) {
            return res.sendStatus(400);
        }
        else {
            sale.count({}, function(err,count) {
                data.saleid = count + 1; 
            });

            //remove all other pending sales for selected table, for franchise
            sale.remove({ispending:  true,  tablecode: data.tablecode, franchisecode: data.franchisecode});
        }
        
        sale.insertMany(data,function(error, docs){
            if(error!==null){
                return next(error); 
            }
            else{
                return res.sendStatus(201);
            }    
        });
                
    } catch (error) {        
        next(error) 
    }    
}


module.exports.deletesales = async function(req,res,next) {
    try { 
        
        condition = req.body; 
        
        if(condition == null || condition == undefined)
            return res.sendStatus(400);
        
        sale.remove(condition,function(error, docs){
            if(error!==null){
                return next(error); 
            }
            else{
                return res.sendStatus(200);
            }    
        });
                
    } catch (error) {        
        next(error) 
    }    
}

module.exports.updatesale = async function(req,res,next) {
    try { 
        
        condition = req.body.condition;
        let objSale = {}
        objSale.title = req.body.data.title;
        objSale.saletype = req.body.data.saletype;
        objSale.salecategory = req.body.data.salecategory;
        objSale.cart = req.body.data.cart;
        objSale.taxes = req.body.data.taxes;
        objSale.total = req.body.data.total;
        objSale.paymentmode = req.body.data.paymentmode;
        objSale.paymentdetails = req.body.data.paymentdetails;
        objSale.discount = req.body.data.discount;
        objSale.customerid = req.body.data.customerid;
        objSale.franchisecode = req.body.data.franchisecode;
        objSale.tablecode = req.body.data.tablecode;
        objSale.isdeleted = req.body.data.isdeleted;
        objSale.note = req.body.data.note;
        objSale.saleid = req.body.data.saleid;
        objSale.createddate = req.body.data.createddate;
        objSale.ispending = req.body.data.ispending;
        objSale.pack = req.body.data.pack;
        
        if(condition == null || condition == undefined || objSale == null || objSale == undefined)
            return res.sendStatus(400);
        
        sale.updateMany(condition,objSale,function(error, doc){
            if(error!==null){
                return next(error); 
            }
            else{
                return res.sendStatus(200);
            }    
        });
                
    } catch (error) {        
        next(error) 
    }    
}

module.exports.getSaleSummary = async function(req,res,next) {
    try {  
        condition = req.body;    
        result = {};  
        const sales = await sale.find(condition);
        
        result.totalpaid = 0;
        result.totalcredit = 0;
        result.totalpartpayment = 0;
        result.totalpaytm = 0;
        result.totalcardswipe = 0;
        result.other = 0;
        result.creditusers = [];

        if(sales && sales.length > 0){
            sales.forEach(s => {
                let total = 0;
                
                // ignore records with payment mode is not present !!!!
                if (s.paymentmode) {

                    if (s.total > 0) {
                        total = s.total;
                    } else {

                        if (s.cart) {
                            s.cart.forEach(c => {
                                total += c.price * c.quantity;
                            });
                        } else {
                            total = 0;
                        }
                    }

                    switch (s.paymentmode.code.toString().toLowerCase()) {
                        
                        // cash
                        case 'c':
                            result.totalpaid += total;
                            break;
                        // Unpaid / Credit
                        case 'up':
                            result.totalcredit += total;
                            if (total>0 && s.paymentdetails && s.paymentdetails.length>0) {
                                s.paymentdetails.forEach(pd => {                                    
                                    result.creditusers.push({ payername: pd.payername, amount: total });
                                });
                                
                            }                            
                            break;
                        case 'pp':
                            result.totalpartpayment += total;
                            break;
                        case 'pt':
                            result.totalpaytm += total;
                            break;
                        case 'cs':
                            result.totalcardswipe += total;
                            break;
                        default:
                            result.other += total;
                            break;
                    }

                }
                //result.total = s.                 
                   
            });
        }

        return res.json(result);        
    } catch (error) {        
        next(error) 
    }    
}


module.exports.getSaleByTableCode = async function(req,res,next) {
    try {  
        tableCode = req.body;            
        const sale = await sale.findOne({tablecode: tableCode, isdeleted: false, ispending: true});      

        if(sale) {
            // remove all other sales
            sale.remove({saleid:  { $ne: sale.saleid} });
            return res.json(sale);      
        }                
        else {
            return res.json({});
        }
          
    } catch (error) {        
        next(error) 
    }    
}
