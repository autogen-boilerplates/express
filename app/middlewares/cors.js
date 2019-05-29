module.exports.cors = function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cookie, sid");
    res.header('Accept-Control-Allow-Methods', 'POST,GET');
    res.header("Access-Control-Allow-Credentials", true);
    next();
}
  