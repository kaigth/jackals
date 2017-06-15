var webpack = require( 'webpack' );
var path = require( 'path' );

var APP_DIR = path.join( __dirname, '..', 'app' );

module.exports = {
  entry: [ './public/app/index.js' ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.js$/,
        use: 'eslint-loader',
        enforce: 'pre',
        include: APP_DIR,
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: APP_DIR,
        exclude: '/node_modules/'
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join( __dirname, '..', 'build' ),
    publicPath: 'static/',
  },
  resolve: {
    extensions: [ '.js' ]
  },
};