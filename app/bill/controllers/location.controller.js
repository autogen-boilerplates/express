
var location = require('../models/location.model')
var queries = require('../queries/index.query')

module.exports.getlocationByID = async function(req,res,next) {
    try { 
        id = req.params.id;       
        if(id == null || id == undefined)
            return res.sendStatus(400);

        const result = await location.findOne(queries.common.getbyid(id)); //.select(queries.location.getbyid_select());
        return res.json(result);        
    } catch (error) { next(error) }    
}

module.exports.getlocations = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await location.find(condition);
        return res.json(result);        
    } catch (error) { next(error)}    
}

module.exports.addlocations = async function(req,res,next) {
    try { 
		data = req.body; 
        if(data == null || data == undefined)
            return res.sendStatus(400);

        location.insertMany(data,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(201); }    
        });   
    } catch (error) { next(error) }    
}


module.exports.deletelocations = async function(req,res,next) {
    try {
        condition = req.body;  
        if(condition == null || condition == undefined)
            return res.sendStatus(400);

        location.remove(condition,function(error, docs){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

module.exports.updatelocation = async function(req,res,next) {
    try {
        condition = req.body.condition; data = req.body.data;  
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);

        location.findOneAndUpdate(condition,data,function(error, doc){
            if(error!==null){ return next(error); }
            else{ return res.sendStatus(200); }    
        });    
    } catch (error) { next(error) }    
}

//Custom Fuctions 

module.exports.getbills_location = async function(req,res,next) {
    try {  
		const limit = req.body.pagging.take==0? 1: req.body.pagging.take;
        const cnt = Math.ceil(await location.count(queries.location.getbills_location_filter(req.body.location,))/limit);                 
        const data = await location.find(queries.location.getbills_location_filter(req.body.location,)).select(queries.location.getbills_location_select())
		.skip(req.body.pagging.skip).limit(req.body.pagging.take).sort([[req.body.pagging.sortby,req.body.pagging.sortdirection]]);        
        const response = {data,cnt}
        return res.json(response);        
    } catch (error) {        
        next(error) 
    }    
}