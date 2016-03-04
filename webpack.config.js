'use strict';

const path = require('path'),
	WebpackConfig = require('webpack-config');

WebpackConfig.environment.setAll({
	env: function() {
		return process.env.WEBPACK_ENV || process.env.NODE_ENV;
	},
	paths: {
		src: path.join(__dirname, 'src'),
		dist: path.join(__dirname, 'dist'),
		template: path.join(__dirname, 'template'),
		styles: path.join(__dirname, 'styles')
	}
});

module.exports = new WebpackConfig().extend('./conf/webpack.[env].config.js');
