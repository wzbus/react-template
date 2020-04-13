const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    vendors: ['react', 'react-router', 'react-router-dom', 'react-redux', 'react-router-redux', 'antd']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, '../dll', 'manifest.json')
    })
  ]
}