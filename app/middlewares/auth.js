var config = require('../../config');
var session = require("express-session")
var MongoDBStore = require('connect-mongodb-session')(session);

var mongoStore = new MongoDBStore({
    uri: config.conf.app.connectionString,//config.get('app.connectionString'),
    collection: 'sessions'
  });

module.exports.isAuthenticated = function(req, res, next) {
    
    
    // 1. check if the url is public
    var publicApis = config.conf.security.publicApis;//config.get('security.publicApis');
    var isPublicApi = publicApis.indexOf(req.originalUrl);
    if(isPublicApi!==-1)
    {
        return next();
    }
    
    // do any checks you want to in here
    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE publicApis
    // you can do this however you want with whatever variables you set up   
    if ((req.session!== undefined && req.session.userinfo !== '' && req.session.userinfo !== undefined && req.session.userinfo != null))
    {
        return next();
    }
    else{        
        if(req.headers && req.headers.sessionid) {
            mongoStore.get(req.headers.sessionid, function (error, session) {
                if (error) {                      
                  res.sendStatus('401');                  
                }
                else {
                    req.session.userinfo = session;
                    return next();
                }            
              });    
        }
        else {
            return res.sendStatus('403');
        }
    }    

     
        
    

  }
  