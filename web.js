#!/usr/bin/env node
var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var infile = "index.html";
// read the index.html file into a buffer
var buf = fs.readFileSync(infile);
var output = buf.toString('utf-8');


app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
