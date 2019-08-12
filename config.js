
//assume that config.json is in application root

module.exports.conf = {
    "app":{
        "port" : "8181",
        "connectionString": "mongodb://shrikantgond:shrikant123@ds157707.mlab.com:57707/pos", //mongodb://localhost:27017/pos
        "sessionSecret": "aarti"              
    },
    "security":{
        "jwt":{
            "passphrase" : "avinash",
            "expiryInMinutes" : 1
        },
        "publicApis" : [
            "/api/user/login",
            "/api/user/register",
            "/api/franchise/getfranchises",
            "/api/franchise/addfranchises"
        ]
    },
    "performance":{
        "cacheduration": 100
    }

}

