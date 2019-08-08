
var menu = require('../models/menu.model')
var queries = require('../queries/index.query')

module.exports.getmenuByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await menu.findOne(queries.common.getbyid(id)); //.select(queries.menu.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getmenus = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await menu.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addmenus = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        menu.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletemenus = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        menu.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatemenu = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        menu.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 

module.exports.getmenus_title = async function(req,res,next) {
    try {  
		const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await menu.count(queries.menu.getmenus_title_filter(req.body.startdate,req.body.enddate,))/limit);                 
        const data = await menu.find(queries.menu.getmenus_title_filter(title,)).select(queries.menu.getmenus_title_select())
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);        
    } catch (error) {        
        next(error) 
    }    
}
module.exports.getmenudetails_code = async function(req,res,next) {
    try {  
		const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await menu.count(queries.menu.getmenudetails_code_filter(req.body.startdate,req.body.enddate,))/limit);                 
        const data = await menu.find(queries.menu.getmenudetails_code_filter(code,)).select(queries.menu.getmenudetails_code_select())
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);        
    } catch (error) {        
        next(error) 
    }    
}