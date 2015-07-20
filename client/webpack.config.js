var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index.es',
  output: {
    publicPath: 'http://localhost:9090/assets/',
    path: path.resolve(__dirname, '..', 'public'),
    filename: "bundle.js"
  },
  cssnext: {
    browsers: "last 2 versions",
  },
  module: {
    loaders: [
      // {
      //   test:   /\.css$/,
      //   loader: "style-loader!css-loader!cssnext-loader"
      // },
      {
        test: /\.es?$/,
        loader: 'babel'
      },
      {
        test: /\.html?$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
       new ngAnnotatePlugin({ add: true }),
       new webpack.DefinePlugin({ ON_TEST: process.env.NODE_ENV === "test" }),
     ]
};
