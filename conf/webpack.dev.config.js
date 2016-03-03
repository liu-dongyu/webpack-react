//开发环境配置

'use strict';

const webpack = require('webpack'),
	WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./conf/webpack.base.config.js').merge({
	devServer: {
		contentBase: WebpackConfig.environment.get('paths').dist,
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
	]
});
