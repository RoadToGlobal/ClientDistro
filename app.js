#!/usr/bin/env node
var express = require('express');
var debug = require('debug')('app');

var app = express();

app.get('/', function(req, res) {
  res.send('ClientDistro');
});

app.set('port', process.env.PORT || 8000);
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
