var express = require('express'),
    http = require('http');
//Create an express application
var app = express()
    //registera middleware
    .use(function(req, res, next) {
        res.end('hello express!');
    });
//Registerwith http
http.createServer(app).listen(3000);