#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
var express = require('express');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = express();

//importing the HTTP libraries
var http = require('http');
var msg = "";

app.get('/', function (req, res) {
   // read data
    res.write('<p><u> Listen to Queue:</u></p>');
   	setInterval(
			function(){
				writeData(res);
			}
			, 1000);
})

var server = app.listen(1443, function () {

   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
function writeData(res){
	//open a connection and a channel
	amqp.connect('amqp://172.31.55.143:8090', function(err, conn) {
		conn.createChannel(function(err, ch) {
			var q = 'alertsQueue';
			ch.assertQueue(q, {durable: false});
			ch.consume(q, function(msg) {
				var secs = msg.content.toString().split('.').length - 1;

				setTimeout(function() {
					console.log("  Received ", msg.content.toString());
					res.write('<p> Receive new msg: <b>'+msg.content.toString()+'</b></p>');
				}, secs * 1000);
			}, {noAck: false});
		});
	});
}














