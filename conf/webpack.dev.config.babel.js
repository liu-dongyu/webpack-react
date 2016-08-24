//开发环境配置

'use strict';

import Config from 'webpack-config';
import webpack from 'webpack';
import path from 'path';
import StyleLintPlugin from 'stylelint-webpack-plugin';

export default new Config().extend('./conf/webpack.base.config.babel.js').merge({
  devtool: 'source-map',
  debug: true,
  output: {
    pathinfo: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      context: process.cwd(),
      syntax: 'scss',
      files: [`./styles/**/*.scss`],
    }),
  ],
  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc'),
  },
  module: {
    loaders: [
      {
        test: /(\.jsx)$/,
        loaders: ['eslint'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /(\.scss)$/,
        include: path.resolve(__dirname, '../styles'),
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!resolve-url!sass?sourceMap!postcss'
      },
      {
        test: /\.css?$/,
        include: path.resolve(__dirname, '../node_modules'),
        loader: 'style!css',
      },
    ]
  },
});
