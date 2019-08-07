
var vendorcategory = require('../models/vendorcategory.model')
var queries = require('../queries/index.query')

module.exports.getvendorcategoryByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await vendorcategory.findOne(queries.common.getbyid(id)); //.select(queries.vendorcategory.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getvendorcategorys = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await vendorcategory.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addvendorcategorys = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        vendorcategory.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletevendorcategorys = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        vendorcategory.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatevendorcategory = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        vendorcategory.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
