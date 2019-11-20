// module.paths.push("D:\\node\\node_global\\node_modules")
// module.paths.push("C:\\Users\\0200048\\AppData\\Roaming\\npm\\node_modules")
// console.log(module.paths)
// console.log("module.paths 的路径可以在代码中 push 添加")

// var _ = require('underscore');
// var express = require('express');
// var mongoose = require('mongoose');
// var fs = require('fs');
// var assert = require('assert');

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('./index.html', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data, 'utf-8');
    });
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    socket.on('ping1', function (data) {
        console.log('Received PING. Sending PONG..');
        socket.emit('pong', { text: 'PONG' });
    });
    socket.on('pong', function (data) {
        console.log('Received PONG response. PONG!');
    });
    socket.on('message', function (data) {
        socket.broadcast.emit('push message', data);
        console.log("message")
        socket.emit('push message', data);
    });
    setInterval(function () {
        console.log('Sending PING to client..');
        socket.emit('ping', { text: 'PING' });
    }, 10000);
});



