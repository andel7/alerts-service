#!/usr/bin/env node

//declare a queue for 'alertsQueue' to send to; publish a message to the alertsQueue

var amqp = require('amqplib/callback_api');
var msg = "";
var val = "";

// print process.argv
process.argv.forEach(function (val, index, array) {
	console.log("index: "+index +" ----------- val: "+val)
	//console.log("val: "+val)
	if (index===2){
		msg = val +msg;
	}
	
});

console.log(" [x] before conn :::", msg);

//open a connection and a channel
/*
amqp.connect('amqp://172.31.55.143:8090', function(err, conn) {
*/
amqp.connect('amqp://10.12.65.36:4369', function(err, conn) {
console.log(err);

 conn.createChannel(function(err, ch) {
    
    var q = 'alertsQueue';
    

	//alertsQueue will only be created if it doesn't exist already
    ch.assertQueue(q, {durable: false});
	
    //Note: on Node 6 Buffer.from(msg) should be used
	//The message content is a byte array
    ch.sendToQueue(q, new Buffer(msg));
	//ch.sendToQueue(q, new Buffer(msg));
    console.log(" [x] Sent %s", msg);
  });
  //close the connection and exit
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});