
var billcoupon = require('../models/billcoupon.model')
var queries = require('../queries/index.query')

module.exports.getbillcouponByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await billcoupon.findOne(queries.common.getbyid(id)); //.select(queries.billcoupon.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getbillcoupons = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await billcoupon.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addbillcoupons = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        billcoupon.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletebillcoupons = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        billcoupon.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatebillcoupon = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        billcoupon.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
