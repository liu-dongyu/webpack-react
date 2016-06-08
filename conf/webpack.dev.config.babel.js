//开发环境配置

'use strict';

import Config from 'webpack-config';
import webpack from 'webpack';
import path from 'path';

export default new Config().extend('./conf/webpack.base.config.babel.js').merge({
  debug: true,
  output: {
    pathinfo: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map'
});
