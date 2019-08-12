
var customerstat = require('../models/customerstat.model')
var queries = require('../queries/index.query')

module.exports.getcustomerstatByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await customerstat.findOne(queries.common.getbyid(id)); //.select(queries.customerstat.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getcustomerstats = async function(req,res,next) {
    try {  
        condition = req.body.condition;  
        const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await customerstat.count(condition)/limit);                 
        const data = await customerstat.find(condition)
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);         
    } catch (error) { next(error)}    
}

module.exports.addcustomerstats = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        customerstat.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletecustomerstats = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        customerstat.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatecustomerstat = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        customerstat.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
