var webpackConfig = require("./webpack.config");
var path = require("path");
var appEntry = path.resolve('./app/index.es');
var preprocessors = {};

preprocessors[appEntry] = ["webpack"];

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [appEntry],
    webpack: webpackConfig,
    exclude: [],
    preprocessors: preprocessors,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'], // or you could use Chrome
    phantomjsLauncher: {
      cmd: {
        linux: path.join(__dirname, 'node_modules/phantomjs/bin/phantomjs'),
        darwin: path.join(__dirname, 'node_modules/phantomjs/bin/phantomjs')
      }
    },
    plugins: [
      require("karma-webpack"),
      "karma-jasmine",
      "karma-phantomjs-launcher-nonet",
    ]
  });
};
