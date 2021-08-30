// import package

import passport from 'passport';
import morgan from 'morgan';

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var http = require("http");
var https = require("https");
const rateLimit = require("express-rate-limit");


// import config
import config from './config';
import dbConnection from './config/dbConnection';

// import routes
import adminApi from './routes/admin.route';
import userApi from './routes/user.route';

const app = express();
const cors = require('cors');
app.use(morgan("dev"))
app.use(cors());
var ip = require('ip');
var fs = require('fs');
var myip = ip.address();



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());

// include passport stratagy
require("./config/passport").usersAuth(passport)
// require("./config/passport").adminAuth(passport)

// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));


// coin
app.get('/test', (req, res) => {
  console.log('successfully')
})

app.use('/admin', adminApi)
app.use('/user', userApi)



var server = http.createServer(app);


app.get('/', function (req, res) {
  res.json({ status: true });
});


// DATABASE CONNECTION
dbConnection((done) => {
  if (done) {
    server = server.listen(config.PORT, function () {
      console.log('\x1b[34m%s\x1b[0m', `server is running on port ${config.PORT}`);
    });
  }
})


