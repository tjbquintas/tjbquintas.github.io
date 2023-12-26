var express = require('express');
var http = require('http');
var path = require('path');
var open = require('open');

var app = express();
var server = http.Server(app);
var port = 8080;

app.set('port', port);

app.get('/', function(request, response) {
    response.sendFile(__dirname);
});

app.use(express.static(__dirname));

server.listen(port, function() {
    open('http://localhost:8080/login.html');
});