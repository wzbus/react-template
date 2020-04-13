const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {},
    hot: true,
    inline: true,
    progress: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('../dll/manifest.json'),
      context: path.join(__dirname, '../dll')
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ],
  performance: {
    hints: false
  }
})
