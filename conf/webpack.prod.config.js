//生产环境配置

'use strict';

const webpack = require('webpack'),
	WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./conf/webpack.base.config.js').merge({
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			mangle: false,
			compress: {
				warnings: false
			}
		})
	]
});
