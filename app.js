var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./config/db');

var generate_uid = require('./routes/generate_uid');
var customer = require('./routes/customer');
var users = require('./routes/users');
var post = require('./routes/post');

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + '/frontend/dist/angular-node-express'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.use('/api/v1/users', users);
app.use('/api/v1/customer', customer);
app.use('/api/v1/generate_uid', generate_uid);
app.use('/api', post);

module.exports = app;
