//生产环境配置

'use strict';

const path = require('path'),
	webpack = require('webpack'),
	WebpackConfig = require('webpack-config'),
	nodemodulesPath = path.join(path.resolve(__dirname, '..'), 'node_modules');

module.exports = new WebpackConfig().extend('./conf/webpack.base.config.js').merge({

});
