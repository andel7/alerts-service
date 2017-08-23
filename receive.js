#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

//open a connection and a channel
amqp.connect(process.env.AMQP_URL, function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'alertsQueue';

    ch.assertQueue(q, {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      console.log("  Received ", msg.content.toString());
    }, {noAck: true});
  });
});