// var _ = require('underscore');
// var express = require('express');
// var mongoose = require('mongoose');
// var fs = require('fs');
// var assert = require('assert');
// var http = require('http');
// var io = require('socket.io');



var express = require('express');
// var errorhandler = require('errorhandler')();
// https://stackoverflow.com/questions/34274928/express-errorhandler
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.set('port', process.env.PORT || 3000);

if ('development' === app.get('env')) {
    console.log(1)
    app.use(express.errorHandler());
}

return false



app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection', function (socket) {
    socket.emit('welcome', { text: 'OH HAI! U R CONNECTED!' });
});

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});