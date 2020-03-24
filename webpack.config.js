const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js'
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {},
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        }
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader'
      }
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader'
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "public/mock"), to: "mock" },
      { from: path.resolve(__dirname, "public/assets"), to: "assets" }
    ])
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'public/assets'),
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/')
    }
  }
}
