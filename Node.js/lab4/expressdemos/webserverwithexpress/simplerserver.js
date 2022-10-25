var express = require('express');
var app = express()
    //registera middleware
    .use(function(req, res, next) {
        res.end('hello express!');
    });