var user = require('../models/user.model')
var queries = require('../queries/index.query')

var middlewares = require('../../middlewares/index');
module.exports.getuserByID = async function(req,res,next) {
    try {   
        id = req.params.id;
        
        if(id == null || id == undefined)
            return res.sendStatus(400);
        
        const result = await user.findOne(queries.common.getbyid(id)).select(queries.user.getbyid_select());
        return res.json(result);        
    } catch (error) {
        next(error) 
    }    
}

module.exports.getusers = async function(req,res,next) {
    try {  
        condition = req.body;      
        const result = await user.find(condition);
        return res.json(result);        
    } catch (error) {        
        next(error) 
    }    
}

module.exports.addusers = async function(req,res,next) {
    try { 
        
        data = req.body; 
        
        if(data == null || data == undefined)
            return res.sendStatus(400);
        
        user.insertMany(data,function(error, docs){
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


module.exports.deleteusers = async function(req,res,next) {
    try { 
        
        condition = req.body; 
        
        if(condition == null || condition == undefined)
            return res.sendStatus(400);
        
        user.remove(condition,function(error, docs){
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

module.exports.updateuser = async function(req,res,next) {
    try { 
        
        condition = req.body.condition;
        data = req.body.data; 
        
        if(condition == null || condition == undefined || data == null || data == undefined)
            return res.sendStatus(400);
        
        user.findOneAndUpdate(condition,data,function(error, doc){
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

// TODO : receive encrypted password for better security
// TODO : instead of hardcoded values, we need to setup db and fetch user data from there
module.exports.loginUser = async function(req,res,next) {
    try {

        // user is already logged in
        if(req.session!== undefined && req.session.userinfo!==null && req.session.userinfo !==undefined){
            res.session = req.session.userinfo;
            return res.json(req.session.id);
        }

        userdata = req.body;
        if(userdata == undefined || userdata == null || userdata == ''){
            return res.sendStatus(400);
        }

        const result = await user.findOne({email: userdata.email, password: userdata.password});        
        if(result !== undefined && result !== null && result !== '')
        {            
            req.session.userinfo = result;
            //res.body = req.session.id;
            //req.session.loggedinIP = req.ip;
            return res.json({id: req.session.id,userinfo: req.session.userinfo,cookie:req.session.cookie});
        }
        else{
            return res.sendStatus(401);
        }
                
    } catch (error) {                
        next(error) 
    }    
}

module.exports.registerUser = async function(req,res,next) {
    try {
        userdata = req.body;   
        if(userdata == undefined || userdata == null || userdata == ''){
            return res.sendStatus(400);
        }              
        
        user.findOne({email: userdata.email}, function (error, result) {
            if (error) {
              return next(error);
            } else {
              
                // check if user already exist return 409 = conflict, else create a new user        
                if(result == undefined || result == null || result == '')
                {            
                    // create new user after validation checks
                    // TODO : validation checks before registration
                    let userObj =  new user();
                    userObj.name = userdata.name;
                    userObj.email = userdata.email;
                    userObj.password = userdata.password; 
                    userObj.mobile = userdata.mobile;
                    userObj.usertype = userdata.usertype;
                    //user = userdata;
                    userObj.validate(function(err) {
                        if (err)
                            {return next(err);}
                        userObj.save(function(err) {
                            if (err)
                                {return next(err);}
                            // user data saved , now save session and send response
                            req.session.userinfo = userObj;
                            return res.sendStatus(201);
                            });

                    });

                    
                }
                else{
                    return res.sendStatus(409);
                }              
            }
          });        
                
    } catch (error) {                
        next(error) 
    }    
}


module.exports.logoutUser = function(req,res,next) {
    try {
        if (req.session.userinfo) {
            // delete session object
            req.session.destroy(function(err) {
              if(err) {
                return next(err);
              } else {
                return res.sendStatus(200);
              }
            });
          }                         
    } catch (error) {                
        next(error) 
    }    
}
