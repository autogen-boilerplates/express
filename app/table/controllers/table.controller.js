var table = require('../models/table.model')
var queries = require('../queries/index.query')
var sale = require('../../franchise/models/sale.model')

module.exports.gettableByID = async function(req,res,next) {
    try {   
        id = req.params.id;
        
        if(id == null || id == undefined)
            return res.sendStatus(400);
        
        const result = await table.findOne(queries.common.getbyid(id)).select(queries.table.getbyid_select());
        return res.json(result);        
    } catch (error) {
        next(error) 
    }    
}

module.exports.gettables = async function(req,res,next) {
    try {  
        condition = req.body;      
        const tables = await table.find(condition);
        tables.sort((a,b) => parseInt(a.code) < parseInt(b.code) ? -1 : 1);
        const removed = await sale.remove({isdeleted: false,ispending: true ,$where: '(this.cart.length == 0)'});        
        const sales = await sale.find({isdeleted: false, ispending: true});

        if (tables && tables.length > 0) {
            tables.forEach(t => {                
                if(sales){
                    const sale = sales.find((s) => { return s.tablecode === t.code; });
                    if ( sale ) {
                        t.color = 'accent';
                    }
                    else {
                        t.color ="";  
                    }
                }
                t.isselected = false;
            });
        } 

        return res.json(tables);        
    } catch (error) {        
        next(error) 
    }    
}

module.exports.addtables = async function(req,res,next) {
    try { 
        
        data = req.body; 
        
        if(data == null || data == undefined)
            return res.sendStatus(400);
        
        table.insertMany(data,function(error, docs){
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


module.exports.deletetables = async function(req,res,next) {
    try { 
        
        condition = req.body; 
        
        if(condition == null || condition == undefined)
            return res.sendStatus(400);
        
        table.remove(condition,function(error, docs){
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

module.exports.updatetable = async function(req,res,next) {
    try { 
        
        condition = req.body.condition;
        data = req.body.data; 
        
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);
        
        table.findOneAndUpdate(condition,data,function(error, doc){
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
