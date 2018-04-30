const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJsPlugin()
  ]
});