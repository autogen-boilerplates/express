const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

//const port = 5000;

var config = require('./config');
var middlewares = require('./app/middlewares/index');
var index_route = require('./app/core/routes/index.route');

console.log(config.conf.app.connectionString);
console.log(config.conf.security);
mongoose.connect(config.conf.app.connectionString, {useNewUrlParser:true});

app.use(middlewares.sessions.session);
//app.use(middlewares.cors.cors);
app.use(cors());
// Body parser
app.use(express.urlencoded({ extended: false }));

// Import Dependencies
app.use(bodyParser.json());
var port = 5000; //config.get('app.port');        // set our port

app.use(middlewares.handlers.session_invalid);
app.use('/api', index_route);

//Specify port

// Body parser

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

// Mock APIs
app.get("/userss", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});

app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port {0}
Visit http://localhost:5000`,port);
});