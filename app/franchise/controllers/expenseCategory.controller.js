var expenseCategory = require('../models/expenseCategory.model')
var queries = require('../queries/index.query')

module.exports.getexpenseCategoryByID = async function(req,res,next) {
    try {   
        id = req.params.id;
        
        if(id == null || id == undefined)
            return res.sendStatus(400);
        
        const result = await expenseCategory.findOne(queries.common.getbyid(id)).select(queries.expenseCategory.getbyid_select());
        return res.json(result);        
    } catch (error) {
        next(error) 
    }    
}

module.exports.getexpenseCategorys = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await expenseCategory.find(condition);
        return res.json(result);        
    } catch (error) {        
        next(error) 
    }    
}

module.exports.addexpenseCategorys = async function(req,res,next) {
    try { 
        
        data = req.body; 
        
        if(data == null || data == undefined)
            return res.sendStatus(400);
        
        expenseCategory.insertMany(data,function(error, docs){
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


module.exports.deleteexpenseCategorys = async function(req,res,next) {
    try { 
        
        condition = req.body; 
        
        if(condition == null || condition == undefined)
            return res.sendStatus(400);
        
        expenseCategory.remove(condition,function(error, docs){
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

module.exports.updateexpenseCategory = async function(req,res,next) {
    try { 
        
        condition = req.body.condition;
        data = req.body.data; 
        
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);
        
        expenseCategory.findOneAndUpdate(condition,data,function(error, doc){
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
