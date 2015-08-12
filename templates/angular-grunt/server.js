/*
 * Not for redistribution.
 * Copyright (c) ${companyName}.
 */

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();

app.set('view engine', 'html');
app.engine('html', require('jade').__express);
app.use(logger('dev'));
app.use(express.static(__dirname + '/src'));

app.get('*', function(req, res) {
  // load the single view file (angular will handle the page changes on the front-end)
  res.sendFile(__dirname + '/src/index.html');
});

// listen (start app with node server.js) ======================================
var port = 9080;
app.listen(port, function(){
  console.log("App listening on port " + port);
});
