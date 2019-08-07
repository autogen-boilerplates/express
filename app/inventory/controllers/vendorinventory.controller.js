
var vendorinventory = require('../models/vendorinventory.model')
var queries = require('../queries/index.query')

module.exports.getvendorinventoryByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await vendorinventory.findOne(queries.common.getbyid(id)); //.select(queries.vendorinventory.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getvendorinventorys = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await vendorinventory.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addvendorinventorys = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        vendorinventory.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletevendorinventorys = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        vendorinventory.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatevendorinventory = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        vendorinventory.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
