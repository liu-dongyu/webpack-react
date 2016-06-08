//开发环境和生产环境共用配置

'use strict';

import Config from 'webpack-config';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default new Config().merge({
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '..', 'src/routes.js')],
    vendors: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'static'],
  },
  plugins: [
    // 以 template 为基础在 dist 下自动生成index.html
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, '..', 'template/index.html'),
      hash: true,
      title: 'a react project demo',
    }),
    // 第三方库存放的地方
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
    // css打包生成的目录
    new ExtractTextPlugin('styles/styles.css')
  ],
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['babel?cacheDirectory'],
        include: path.resolve(__dirname, '..', 'src')
      },
      {
        test: /(\.css|\.scss)$/,
        include: path.resolve(__dirname, '..', 'src'),
        loader: ExtractTextPlugin.extract('style',
          'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!sass!postcss')
      },
      {
        test: /\.css?$/,
        include: path.resolve(__dirname, '..', 'node_modules'),
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
      }
    ]
  },
  postcss: () => [require('postcss-cssnext')]
});