#!/usr/bin/env node
var path = require('path');
var appConfig = require(path.join(__dirname, '../..', 'app.config'));
var open = require('open');

module.exports = function () {
  open('http://localhost:' + appConfig.server.port.dev + '/list');
  open('http://localhost:' + appConfig.server.port.proxy + '/webpack-dev-server/list');
};
