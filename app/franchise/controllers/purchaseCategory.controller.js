var purchaseCategory = require('../models/purchaseCategory.model')
var queries = require('../queries/index.query')

module.exports.getpurchaseCategoryByID = async function(req,res,next) {
    try {   
        id = req.params.id;
        
        if(id == null || id == undefined)
            return res.sendStatus(400);
        
        const result = await purchaseCategory.findOne(queries.common.getbyid(id)).select(queries.purchaseCategory.getbyid_select());
        return res.json(result);        
    } catch (error) {
        next(error) 
    }    
}

module.exports.getpurchaseCategorys = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await purchaseCategory.find(condition);
        return res.json(result);        
    } catch (error) {        
        next(error) 
    }    
}

module.exports.addpurchaseCategorys = async function(req,res,next) {
    try { 
        
        data = req.body; 
        
        if(data == null || data == undefined)
            return res.sendStatus(400);
        
        purchaseCategory.insertMany(data,function(error, docs){
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


module.exports.deletepurchaseCategorys = async function(req,res,next) {
    try { 
        
        condition = req.body; 
        
        if(condition == null || condition == undefined)
            return res.sendStatus(400);
        
        purchaseCategory.remove(condition,function(error, docs){
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

module.exports.updatepurchaseCategory = async function(req,res,next) {
    try { 
        
        condition = req.body.condition;
        data = req.body.data; 
        
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);
        
        purchaseCategory.findOneAndUpdate(condition,data,function(error, doc){
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
