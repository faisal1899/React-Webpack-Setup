const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    App: path.resolve(__dirname, 'src/app/App.js'),
    Dashboard: path.resolve(__dirname, 'src/dashboard/Dashboard.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src/app/'),
      Dashboard: path.resolve(__dirname, 'src/dashboard/'),
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: 0,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   hmr: process.env.NODE_ENV === 'development'
            // }
          },
          // 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              options: {}
            }
          },
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      name: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
    })
  ],
  // performance: {
  //   hints: false,
  // },
  devtool: 'inline-source-map'
};