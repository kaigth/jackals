var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    app: './public/app/index.js'
  },

  resolve: {
    root: __dirname
  },

  output: {
    path: __dirname + '/public',
    filename: 'js/[name].js'
  },

  module: {
    loaders: [
      {
        test: /app\/.*\.js$/,
        exclude: '/node_modules/|dist|vendor/',
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'sass?sourceMap'
        ),
        exclude: /node_modules|dist/
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/app.css')
  ],

  eslint: {
    configFile: '.eslintrc'
  }
};