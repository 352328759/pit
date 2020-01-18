// var _ = require('underscore');
// var _ = require('lodash');
// var express = require('express');
// var mongoose = require('mongoose');
// var fs = require('fs');
// var assert = require('assert');
// var http = require('http');
// var io = require('socket.io');
// var portfinder = require('portfinder')

var express = require('express');
var errorhandler = require('errorhandler')();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var nicknames = [];

app.set('port', process.env.PORT || 3000);

if ('development' === app.get('env')) {
	app.use(errorhandler);
}

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
	socket.on('nickname', function (data, fn) {
		if (nicknames.indexOf(data) !== -1) {
			fn(true);
		} else {
			fn(false);
			nicknames.push(data);
			socket.nickname = data;
			io.sockets.emit('nicknames', nicknames);
		}
	});
	socket.on('user message', function (data) {
		io.sockets.emit('user message', {
			nick: socket.nickname,
			message: data
		});
	});
	socket.on('disconnect', function () {
		if (!socket.nickname) { return; }
		nicknames.splice(nicknames.indexOf(socket.nickname), 1);
	});
});

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
