//开发环境和生产环境共用配置

'use strict';

const WebpackConfig = require('webpack-config'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	path = require('path'),
	src = WebpackConfig.environment.get('paths').src,
	dist = WebpackConfig.environment.get('paths').dist,
	views = WebpackConfig.environment.get('paths').views,
	styles = WebpackConfig.environment.get('paths').styles,
	nodemodulesPath = path.join(path.resolve(__dirname, '..'), 'node_modules'),
	autoprefixer = require('autoprefixer'),
	precss       = require('precss'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new WebpackConfig().merge({
	entry: {
		app: path.join(src, 'routes.jsx'),
		//打包时分离 vendors 内指定的库
		vendors: ['react', 'react-dom', 'react-router']
	},
	output: {
		path: dist,
		filename: 'js/bundle_[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', 'scss'],
		//快捷路径，可以直接 import 该目录下的文件
		modulesDirectories: ['node_modules', 'styles', 'static'],
		alias: {
			//指定常用库的位置，优化webpack
			'react': path.join(nodemodulesPath, 'react')
		}
	},
	plugins: [
		//以 template 为基础在 dist 下自动生成index.html
		new HtmlWebpackPlugin({template: path.join(views, 'index.html')}),
		//第三方库存放的地方
		new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors_[hash].js'),
		//css打包生成的目录
		new ExtractTextPlugin('styles/styles_[hash].css')
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel?cacheDirectory'],
				include: src
			},
			{
				test: /(\.css|\.scss)$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]-[hash:base64:5]!sass!postcss')
			}
		]
	},
	postcss: function () {
		return [autoprefixer, precss];
	}
});