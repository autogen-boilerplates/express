
//assume that config.json is in application root

module.exports.conf = function () { 
    var args = process.argv.slice(2);
    console.log(args[0]);
    if(args[0] && args[0] == '--dev')    
    {
        return {
                "app":{
                    "port" : "8181",
                    "connectionString": "mongodb://localhost:27017/pos", //"mongodb://shrikantgond:shrikant123@ds157707.mlab.com:57707/pos",
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
    }
    else {

        return {
            "app":{
                "port" : "8181",
                "connectionString": "mongodb://shrikant:shrikant1@ds157707.mlab.com:57707/pos", //mongodb://localhost:27017/pos
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

    }


}

