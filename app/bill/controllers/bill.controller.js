
var bill = require('../models/bill.model')
var queries = require('../queries/index.query')

module.exports.getbillByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await bill.findOne(queries.common.getbyid(id)); //.select(queries.bill.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getbills = async function(req,res,next) {
    try {  
        condition = req.body.condition;  
        const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await bill.count(condition)/limit);                 
        const data = await bill.find(condition)
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);         
    } catch (error) { next(error)}    
}

module.exports.addbills = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        bill.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletebills = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        bill.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatebill = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        bill.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 

module.exports.getbills_all = async function(req,res,next) {
    try {  
		const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await bill.count(queries.bill.getbills_all_filter())/limit);                 
        const data = await bill.find(queries.bill.getbills_all_filter()).select(queries.bill.getbills_all_select())
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);        
    } catch (error) {        
        next(error) 
    }    
}
module.exports.getbills_date = async function(req,res,next) {
    try {  
		const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await bill.count(queries.bill.getbills_date_filter(req.body.startdate,req.body.enddate,))/limit);                 
        const data = await bill.find(queries.bill.getbills_date_filter(req.body.startdate,req.body.enddate,)).select(queries.bill.getbills_date_select())
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);        
    } catch (error) {        
        next(error) 
    }    
}
module.exports.getbilldetails = async function(req,res,next) {
    try {  
		const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await bill.count(queries.bill.getbilldetails_filter(req.body.billnumber,))/limit);                 
        const data = await bill.find(queries.bill.getbilldetails_filter(req.body.billnumber,)).select(queries.bill.getbilldetails_select())
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);        
    } catch (error) {        
        next(error) 
    }    
}
module.exports.getbills_number_customer = async function(req,res,next) {
    try {  
		const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await bill.count(queries.bill.getbills_number_customer_filter(req.body.billnumber,req.body.customer,))/limit);                 
        const data = await bill.find(queries.bill.getbills_number_customer_filter(req.body.billnumber,req.body.customer,)).select(queries.bill.getbills_number_customer_select())
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);        
    } catch (error) {        
        next(error) 
    }    
}