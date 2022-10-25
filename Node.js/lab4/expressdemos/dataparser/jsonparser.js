var express = require('express');
var body = require('body-parser');
const bodyParser = require('body-parser');
var app = express()
    .use(bodyParser())
    .use(function(req, re) {
        if (req.body.foo) {
            res.end('Body parsed! Value of foo: ' + req.body.foo);
        } else {
            res.end('Body does not have foo!')
        }
    }).use(function(err, req, res, next) {
        res.end('Invalid body!')
    }).listen(3000);