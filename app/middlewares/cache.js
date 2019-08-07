var mcache = require('memory-cache')
<<<<<<< HEAD
var config = require('../../config');
=======
var config = require('config');
>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9

module.exports.cacheapi = function(req, res, next) {
    let key = '_express_'+ req.originalUrl;
    let cachedResponse = mcache.get(key);
    if(cachedResponse){
        res.send(cachedResponse);
    }
    else
    {
        return next();
    }
}

module.exports.fillcache = function(req,data){
    let key = '_express_'+ req.originalUrl;
    let cachedResponse = mcache.get(key);
<<<<<<< HEAD
    let duration = config.conf.performance.cacheduration;//config.get('performance.cacheduration');    
=======
    let duration = config.get('performance.cacheduration');    
>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
    if(!cachedResponse){
        mcache.put(key,data,duration*1000);
    }
}

module.exports.cache = mcache;