//开发环境和生产环境共用配置

'use strict';

import Config from 'webpack-config';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default new Config().merge({
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/routes.jsx')],
    vendors: ['react', 'react-dom', 'react-router', 'react-helmet'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../styles'),
      path.resolve(__dirname, '../static'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'wechat demo',
      template: path.resolve(__dirname, '../template/index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
  ],
  module: {
    loaders: [
      {
        test: /(\.jsx)$/,
        loaders: ['babel?cacheDirectory'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg|ico|svg)$/,
        loader: 'url-loader?limit=25000&name=image/[name]-[hash:base64:5].[ext]'
      }
    ]
  },
  postcss: () => [
    require('postcss-will-change'),
    require('postcss-cssnext'),
    require('postcss-pseudoelements'),
    require('postcss-font-normalize'),
  ],
});
