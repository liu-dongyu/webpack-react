//生产环境配置

'use strict';

import Config from 'webpack-config';
import path from 'path';
import webpack from 'webpack';
import WebpackStrip from 'webpack-strip';

export default new Config().extend('./conf/webpack.base.config.babel.js').merge({
	module: {
		loaders: [
			{
				test: /(\.js|\.jsx|\.ls)$/,
				loader: WebpackStrip.loader('console.log', 'console.error', 'alert'),
				include: path.resolve(__dirname, '..', 'src')
			},
		]
	},
	plugins: [
		//bug with inline svg
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
		})
	]
});
