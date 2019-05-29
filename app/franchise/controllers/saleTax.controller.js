var saleTax = require('../models/saleTax.model')
var queries = require('../queries/index.query')

module.exports.getsaleTaxByID = async function(req,res,next) {
    try {   
        id = req.params.id;
        
        if(id == null || id == undefined)
            return res.sendStatus(400);
        
        const result = await saleTax.findOne(queries.common.getbyid(id)).select(queries.saleTax.getbyid_select());
        return res.json(result);        
    } catch (error) {
        next(error) 
    }    
}

module.exports.getsaleTaxs = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await saleTax.find(condition);
        return res.json(result);        
    } catch (error) {        
        next(error) 
    }    
}

module.exports.addsaleTaxs = async function(req,res,next) {
    try { 
        
        data = req.body; 
        
        if(data == null || data == undefined)
            return res.sendStatus(400);
        
        saleTax.insertMany(data,function(error, docs){
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


module.exports.deletesaleTaxs = async function(req,res,next) {
    try { 
        
        condition = req.body; 
        
        if(condition == null || condition == undefined)
            return res.sendStatus(400);
        
        saleTax.remove(condition,function(error, docs){
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

module.exports.updatesaleTax = async function(req,res,next) {
    try { 
        
        condition = req.body.condition;
        data = req.body.data; 
        
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);
        
        saleTax.findOneAndUpdate(condition,data,function(error, doc){
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
