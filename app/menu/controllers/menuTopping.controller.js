var menuTopping = require('../models/menuTopping.model')
var queries = require('../queries/index.query')

module.exports.getmenuToppingByID = async function(req,res,next) {
    try {   
        id = req.params.id;
        
        if(id == null || id == undefined)
            return res.sendStatus(400);
        
        const result = await menuTopping.findOne(queries.common.getbyid(id)).select(queries.menuTopping.getbyid_select());
        return res.json(result);        
    } catch (error) {
        next(error) 
    }    
}

module.exports.getmenuToppings = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await menuTopping.find(condition);
        return res.json(result);        
    } catch (error) {        
        next(error) 
    }    
}

module.exports.addmenuToppings = async function(req,res,next) {
    try { 
        
        data = req.body; 
        
        if(data == null || data == undefined)
            return res.sendStatus(400);
        
        menuTopping.insertMany(data,function(error, docs){
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


module.exports.deletemenuToppings = async function(req,res,next) {
    try { 
        
        condition = req.body; 
        
        if(condition == null || condition == undefined)
            return res.sendStatus(400);
        
        menuTopping.remove(condition,function(error, docs){
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

module.exports.updatemenuTopping = async function(req,res,next) {
    try { 
        
        condition = req.body.condition;
        data = req.body.data; 
        
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);
        
        menuTopping.findOneAndUpdate(condition,data,function(error, doc){
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
