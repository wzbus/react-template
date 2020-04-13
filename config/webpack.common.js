const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'happypack/loader?id=happyBabel'
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        }
      ]
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
            reloadAll: true
          }
        },
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
      test: /\.(png|jpg|jpeg|gif)$/,
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
    new HappyPack({
      id: 'happyBabel',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }],
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "../public/mock"), to: "mock" },
      { from: path.resolve(__dirname, "../public/assets"), to: "assets" }
    ])
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
      pages: path.resolve(__dirname, '../src/pages'),
      utils: path.resolve(__dirname, '../src/utils'),
      assets: path.resolve(__dirname, '../public/assets'),
      mock: path.resolve(__dirname, '../public/mock'),
    }
  }
}
