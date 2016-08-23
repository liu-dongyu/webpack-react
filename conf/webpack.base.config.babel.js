//开发环境和生产环境共用配置

'use strict';

import Config from 'webpack-config';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default new Config().merge({
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '..', 'src/routes.jsx')],
    vendors: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      path.resolve(__dirname, '..', 'node_modules'),
      path.resolve(__dirname, '..', 'styles'),
      path.resolve(__dirname, '..', 'static')
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'wechat demo',
      template:  path.resolve(__dirname, '..', 'template/index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
    new ExtractTextPlugin('styles/[name].css')
  ],
  module: {
    loaders: [
      {
        test: /(\.jsx)$/,
        loaders: ['babel?cacheDirectory', 'eslint'],
        include: path.resolve(__dirname, '..', 'src')
      },
      {
        test: /(\.scss)$/,
        include: path.resolve(__dirname, '..', 'styles'),
        loader: ExtractTextPlugin.extract('style',
          'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!resolve-url!sass!postcss')
      },
      {
        test: /\.css?$/,
        include: path.resolve(__dirname, '..', 'node_modules'),
        loader: ExtractTextPlugin.extract('style', 'css')
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
  eslint: {
    configFile: path.resolve(__dirname, '..', '.eslintrc')
  },
  postcss: () => [
    require('postcss-will-change'),
    require('postcss-cssnext'),
    require('postcss-pseudoelements'),
    require('postcss-font-normalize')
  ]
});
