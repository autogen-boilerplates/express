var session = require("express-session")
var MongoDBStore = require('connect-mongodb-session')(session);

<<<<<<< HEAD
var config = require('../../config');

var mongoStore = new MongoDBStore({
    uri: config.conf.app.connectionString,//config.get('app.connectionString'),
=======
var config = require('config');

var mongoStore = new MongoDBStore({
    uri: config.get('app.connectionString'),
>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
    collection: 'sessions'
  });

 module.exports.session =  session({
<<<<<<< HEAD
    secret: config.conf.app.sessionSecret,//config.get('app.sessionSecret'),
=======
    secret: config.get('app.sessionSecret'),
>>>>>>> 686608ff428467263bfc12dd1ebb45b937837ba9
    resave: false,
    saveUninitialized: false,
    store: mongoStore
  });

  // module.exports.getsession = async function(sessionid) {
  //   mongoStore.get(sessionid, function (error, session) {
  //     if (error) {        
  //       return undefined;
  //     }
  //     return session;
  //   });
  // }