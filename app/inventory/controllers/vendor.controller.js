
var vendor = require('../models/vendor.model')
var queries = require('../queries/index.query')

module.exports.getvendorByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await vendor.findOne(queries.common.getbyid(id)); //.select(queries.vendor.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getvendors = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await vendor.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addvendors = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        vendor.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletevendors = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        vendor.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatevendor = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        vendor.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
