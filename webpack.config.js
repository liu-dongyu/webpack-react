'use strict';

const path = require('path');
const WebpackConfig = require('webpack-config');

WebpackConfig.environment.setAll({
  env: function() {
    return process.env.WEBPACK_ENV || process.env.NODE_ENV;
  },
	paths: {
		src: path.join(__dirname, 'javascript'),
		dist: path.join(__dirname, 'dist'),
		views: path.join(__dirname, 'views'),
		styles: path.join(__dirname, 'styles')
	}
});

module.exports = new WebpackConfig().extend('./conf/webpack.[env].config.js');
