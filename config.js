
//assume that config.json is in application root

module.exports.conf = {
    "app":{
        "port" : "8181",
        "connectionString": "mongodb://shrikant:shrikant1@ds157707.mlab.com:57707/pos",
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

