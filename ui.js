#!/usr/bin/env node

var http = require('http');
var variable = "xxxtttxx";
var msgFromQueue = "no msg";

var http = require('http');

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = '';
  var body = '';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><header>' + "Alerts UI:" + '</header><body>' + "khfjhdfkjg" + '</body></html>';
};
 







