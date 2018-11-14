// node自带的路径api
const path = require('path');
// 使用多线程构建
const HappyPack = require('happypack');
// 操作系统的一些信息，例如cpu核心数等
const os = require('os');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// 获取当前host等信息
const address = require('address');
// 定制控制台信息颜色
const chalk = require('chalk');
// 分离css代码
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 用来构建前删除某些文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 用来在控制台显示构建进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// 自动DllPlugin
const AutoDllPlugin = require('autodll-webpack-plugin');

// 根据当前cpu核心数设置线程个数
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = (env, argv) => {
  // 判断是开发或生产环境
  const devMode = argv.mode !== 'production';

  return {
    // 入口文件，指定为react的入口
    entry: path.resolve(__dirname, 'src/App.js'),
    // 构建出口
    output: {
      filename: devMode ? './js/[name].js' : './js/[id].[chunkhash:8].js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      // 允许在import中省略后缀名
      extensions: ['.js', '.jsx', '.scss'],
      // 允许直接import以下目录的内容
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'static'),
        path.resolve(__dirname, 'node_modules'),
      ],
    },
    // 开发服务器
    devServer: {
      // 由于dist文件中的html是入口，所以指定从dist目录处提供服务
      contentBase: path.join(__dirname, 'dist'),
      // 端口号
      port: 5050,
      // 默认是localhost，0,0,0,0表示允许服务器外部访问
      host: '0.0.0.0',
      // 不显示webpack包(bundle)信息
      noInfo: true,
      // 服务内部的所有其他中间件执行完毕之后
      after: () => {
        const lo = `http://${address.ip('lo')}:5050`;
        const net = `http://${address.ip()}:5050`;
        console.log();
        console.log(
          [
            `  App running at:`,
            `  - Local:   ${chalk.cyan(lo)}`,
            `  - Network: ${chalk.cyan(net)}`,
          ].join('\n'),
        );
        console.log();
      },
      // 服务内部的所有其他中间件执行之前
      before: () => {
        console.log('Starting development server...');
      },
      // 任意的404响应都被替代为 index.html
      historyApiFallback: {
        disableDotRule: true,
      },
    },
    module: {
      rules: [
        {
          // 检测所有.js结尾的文件
          test: /\.js$/,
          // 指定用id为js的happypack插件来解析
          use: 'happypack/loader?id=js',
          // 仅解析src中的js
          include: [path.resolve(__dirname, 'src')],
        },
        {
          // 检测所有.scss结尾的文件
          test: /\.(scss|css)$/,
          use: [
            // 只在生产环境抽离css代码
            devMode
              ? 'style-loader'
              : {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    // 在dist目录中，css文件会在css目录中生成，当需要使用例如img目录下的资源时，得先../退出到根目录，所以publicPath是../
                    publicPath: '../',
                  },
                },
            'happypack/loader?id=scss',
          ],
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules/normalize.css'),
          ],
        },
        {
          // 检测所有.jpg.gif.jpeg.png结尾的文件
          test: /\.(jpg|gif|jpeg|png)$/,
          use: {
            loader: 'url-loader',
            options: {
              // 8k以下的打包成base64
              limit: 8192,
              outputPath: 'img/',
              name: devMode ? '[name].[ext]' : '[name].[hash:8].[ext]',
            },
          },
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'static/img'),
          ],
        },
      ],
    },
    plugins: [
      // 指定入口html文件，所有相关css&js都会被注入其中
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
        filename: 'index.html',
        hash: false,
        minify: true,
      }),
      // 抽离css，形成文件
      new MiniCssExtractPlugin({
        filename: devMode
          ? './css/[name].css'
          : './css/[id].[contenthash:8].css',
      }),
      // cache指定第三方库，可以看看node_modules中的.cache文件夹
      new AutoDllPlugin({
        inject: true, // 该js会被注入到HtmlWebPackPlugin的html中
        filename: devMode ? 'vendor.js' : 'vendor.[chunkhash:8].js',
        path: './js',
        entry: {
          // 将指定第三方库抽离，形成DllPlugin
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'styled-components',
          ],
        },
      }),
      // 构建进度条
      new ProgressBarPlugin({
        format: `building [:bar] :percent (:elapsed seconds)`,
      }),
      // 构建前删除dist
      new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
      // 多线程构建js
      new HappyPack({
        id: 'js',
        threadPool: happyThreadPool,
        loaders: ['babel-loader', 'eslint-loader'],
        verbose: false, // 不允许输出信息
      }),
      // 多线程构建scss
      new HappyPack({
        id: 'scss',
        threadPool: happyThreadPool,
        loaders: [
          {
            loader: 'css-loader',
            options: {
              // 指定在css-loader解析css文件前有多少个loader
              // 存在postcss-loader，所以1
              importLoaders: 2,
              // 开启CSS Modules，每个class都会按照localIdentName命名，解决命名冲突问题
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // 设置postcss.config.js的根目录
              config: { path: path.resolve(__dirname) },
            },
          },
          'sass-loader',
        ],
        verbose: false,
      }),
    ],
  };
};
