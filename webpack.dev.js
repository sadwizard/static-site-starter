const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  watch: true,
  devServer: {
    contentBase: path.resolve(__dirname, "dev"),
    compress: true,
    port: 9000,
    hot: false
  }
});