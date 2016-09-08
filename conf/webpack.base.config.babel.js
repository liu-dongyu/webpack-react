//开发环境和生产环境共用配置

'use strict';

import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default new Config().merge({
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/routes.jsx')],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
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
      title: 'demo',
      template: path.resolve(__dirname, '../template/index.html'),
    }),
  ],
  module: {
    noParse: path.resolve(__dirname, '../node_modules/flexibility/flexibility.js'),
    loaders: [
      {
        test: /(\.jsx)$/,
        loaders: ['babel?cacheDirectory'],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(png|jpe?g|ico|svg)(\?.*$|$)/,
        loader: 'file?name=[hash].[ext]',
        include: path.resolve(__dirname, '../static'),
      }
    ]
  },
  postcss: () => {
    return {
      plugins: [
        require('postcss-flexibility'),
        require('postcss-flexbugs-fixes'),
        require('postcss-assets')({
          relative: true,
          loadPaths: [path.resolve(__dirname, '../static')],
        }),
        require('postcss-cssnext')({ browsers: ['ie >= 10', 'last 2 versions'] }),
        require('doiuse')({
          browsers: ['ie >= 10', 'last 2 versions'],
          ignore: [
            'css-appearance',
            'flexbox'
          ]
        }),
        require('postcss-font-normalize'),
        require('postcss-reporter')({ clearMessages: true }),
      ],
      // 修复可能存在的语法错误
      parser: require('postcss-safe-parser'),
    }
  },
});
