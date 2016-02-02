var http = require("http");
var fs = require("fs");
var static = require('node-static');
 
var file = new static.Server('./sounds');
 
var server = http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
});

module.exports = server;

