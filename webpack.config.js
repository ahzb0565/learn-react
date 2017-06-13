const webpack = require('webpack');
module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname + '/dist',  //abs path
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};