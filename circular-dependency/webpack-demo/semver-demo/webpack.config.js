const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  entry: './src/a.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}