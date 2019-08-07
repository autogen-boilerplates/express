
var billorder = require('../models/billorder.model')
var queries = require('../queries/index.query')

module.exports.getbillorderByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await billorder.findOne(queries.common.getbyid(id)); //.select(queries.billorder.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getbillorders = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await billorder.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addbillorders = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        billorder.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletebillorders = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        billorder.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatebillorder = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        billorder.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
