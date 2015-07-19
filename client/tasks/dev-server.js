var fs = require('fs');
var path = require('path');
var appConfig = require(path.join(__dirname, '../..', 'app.config'));

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var compiler =  webpack(require('../webpack.config'));

var server = new WebpackDevServer(compiler, {
  contentBase: 'http://localhost:' + appConfig.server.port.dev,
  quiet: false,
  port: 9090,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: 'http://localhost:' + appConfig.server.port.proxy + '/assets/',
  stats: { colors: true }
});
server.listen(9090, 'localhost', function() {});
