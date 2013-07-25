var express = require('express')
, app = express()
, mongojs = require('mongojs')
, db = mongojs('HelloHandlebars', ['test'])
, server = require('http').createServer(app)
, io = require('socket.io').listen(server);


app.use(express.static(__dirname+'/static'));

server.listen(3000);

io.sockets.on('connection', function(socket) {
	console.log("Got connections");
	socket.on('query', function(query,fn) {
		db.collection('test').find(query, fn);
	});
});
