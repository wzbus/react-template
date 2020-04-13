const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
})
