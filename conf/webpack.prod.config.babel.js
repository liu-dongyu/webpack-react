//生产环境配置

'use strict';

import Config from 'webpack-config';
import path from 'path';
import webpack from 'webpack';
import WebpackStrip from 'webpack-strip';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default new Config().extend('./conf/webpack.base.config.babel.js').merge({
  entry: {
    vendors: ['react', 'react-dom', 'react-router', 'react-helmet', 'flexibility'],
  },
  module: {
    loaders: [
      {
        test: /(\.jsx)$/,
        loader: WebpackStrip.loader('console.log', 'console.error', 'alert'),
        include: path.resolve(__dirname, '..', 'src')
      },
      {
        test: /(\.scss)$/,
        include: path.resolve(__dirname, '../styles'),
        loader: ExtractTextPlugin.extract('style',
          'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!resolve-url!sass!postcss')
      },
      {
        test: /\.css?$/,
        include: path.resolve(__dirname, '../node_modules'),
        loader: ExtractTextPlugin.extract('style', 'css')
      },
    ]
  },
  plugins: [
    // bug with inline svg
    // https://github.com/webpack/webpack/issues/2571
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      minimize: true,
      compress: {
        drop_debugger: true,
        warnings: false,
        drop_console: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ]
});
