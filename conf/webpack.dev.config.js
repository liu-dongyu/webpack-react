//开发环境配置

'use strict';

const webpack = require('webpack'),
	WebpackConfig = require('webpack-config'),
	path = require('path'),
	nodemodulesPath = path.join(path.resolve(__dirname, '..'), 'node_modules');

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
	resolve: {
		alias: {
			'react-dom': path.join(nodemodulesPath, 'react-dom/dist/react-dom.js'),
			'react-router': path.join(nodemodulesPath, 'react-router/umd/ReactRouter.js')
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
