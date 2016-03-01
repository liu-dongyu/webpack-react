//生产环境配置

'use strict';

const path = require('path'),
	webpack = require('webpack'),
	WebpackConfig = require('webpack-config'),
	nodemodulesPath = path.join(path.resolve(__dirname, '..'), 'node_modules');

module.exports = new WebpackConfig().extend('./conf/webpack.base.config.js').merge({
	resolve: {
		alias: {
			'react-dom': path.join(nodemodulesPath, 'react-dom/dist/react-dom.min.js'),
			'react-router': path.join(nodemodulesPath, 'react-router/umd/ReactRouter.min.js')
		}
	}
});
