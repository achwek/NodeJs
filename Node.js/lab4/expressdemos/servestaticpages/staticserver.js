/*var express = require('express');
const serveStatic = require('serve-static');
varserverStatic = require('serve-static');
var app = express()
    .use(serveStatic(__dirname + '/public'))
    .listen(3000);*/
var express = require('express');
var app = express()
    .use(express.static(__dirname + '/public'))
    .listen(3000);