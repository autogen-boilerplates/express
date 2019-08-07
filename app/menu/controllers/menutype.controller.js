
var menutype = require('../models/menutype.model')
var queries = require('../queries/index.query')

module.exports.getmenutypeByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await menutype.findOne(queries.common.getbyid(id)); //.select(queries.menutype.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getmenutypes = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await menutype.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addmenutypes = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        menutype.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletemenutypes = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        menutype.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatemenutype = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        menutype.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 
