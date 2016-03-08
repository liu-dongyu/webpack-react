//开发环境和生产环境共用配置

'use strict';

const WebpackConfig = require('webpack-config'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	path = require('path'),
	src = WebpackConfig.environment.get('paths').src,
	dist = WebpackConfig.environment.get('paths').dist,
	template = WebpackConfig.environment.get('paths').template,
	styles = WebpackConfig.environment.get('paths').styles,
	nodemodulesPath = path.join(path.resolve(__dirname, '..'), 'node_modules'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new WebpackConfig().merge({
	entry: {
		app: path.join(src, 'routes.js'),
		// 打包时分离第三方库
		vendors: ['react', 'react-dom', 'react-router', 'react-router-redux', 'redux', 'react-redux']
	},
	output: {
		path: dist,
		filename: 'js/bundle.[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss', '.css'],
		// 快捷路径，可以直接 import 该目录下的文件
		modulesDirectories: ['node_modules', 'styles', 'static'],
		alias: {
			// 指定公共库的位置，优化webpack搜索硬盘的速度
			'react': path.join(nodemodulesPath, 'react'),
			'react-dom': path.join(nodemodulesPath, 'react-dom'),
			'react-router': path.join(nodemodulesPath, 'react-router'),
			'redux': path.join(nodemodulesPath, 'redux'),
			'react-redux': path.join(nodemodulesPath, 'react-redux'),
			'react-router-redux': path.join(nodemodulesPath, 'react-router-redux')
		}
	},
	plugins: [
		// 以 template 为基础在 dist 下自动生成index.html
		new HtmlWebpackPlugin({template: path.join(template, 'index.html')}),
		// 第三方库存放的地方
		new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.[hash].js'),
		// css打包生成的目录
		new ExtractTextPlugin('styles/styles.[hash].css')
	],
	module: {
		loaders: [
			{
				test: /(\.js|\.jsx)$/,
				loaders: ['babel?cacheDirectory'],
				include: src
			},
			{
				test: /(\.css|\.scss)$/,
				include: styles,
				loader: ExtractTextPlugin.extract('style',
					'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!sass!postcss')
			},
			{ // 正常解析node_modules文件内的css库，不用CSS Modules
				test: /\.css?$/,
				include: nodemodulesPath,
				loader: ExtractTextPlugin.extract('style', 'css')
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
			}
		]
	},
	postcss: function () {
		return [require('postcss-cssnext')];
	}
});