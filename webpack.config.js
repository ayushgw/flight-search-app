const path = require('path');
const webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const config = {
  entry: './src/app.module.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new ngAnnotatePlugin({ add: true })
  ]
};

module.exports = config;
