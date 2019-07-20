var menuingredient = require('../models/menuingredient.model')
var queries = require('../queries/index.query')

module.exports.getmenuingredientByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);
        
        const result = await menuingredient.findOne(queries.common.getbyid(id)); //.select(queries.menuingredient.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getmenuingredients = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await menuingredient.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addmenuingredients = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);
        
        menuingredient.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletemenuingredients = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);
        
        menuingredient.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatemenuingredient = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);
        
        menuingredient.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
