react project demo
==================

## 开始

    // 安装依赖
    npm install 
    
    // 更新依赖
    npm run update
    
    // 开发环境，演示地址：http://localhost:3000
    npm start 
    
    // 生产环境，dist目录
    npm run build 
    
    // js代码规格检测
    npm run eslint

## 框架 / 类库

+ [react](https://github.com/facebook/react)
+ [redux](https://github.com/reactjs/redux)
+ [react-redux](https://github.com/reactjs/react-redux)
+ [react-router](https://github.com/reactjs/react-router)
+ [react-router-redux](https://github.com/reactjs/react-router-redux)
+ [immutable](https://facebook.github.io/immutable-js/)
+ [normalizr](https://github.com/gaearon/normalizr)

## 工具

+ [webpack](https://github.com/webpack/webpack)
+ [webpack-config](https://github.com/mdreizin/webpack-config)（拆分及共享生产环境配置和开发环境配置）
+ [webpack-dev-server](https://github.com/webpack/webpack-dev-server)（开发环境服务器）
+ [babel-loader](https://github.com/babel/babel-loader)（处理 jsx 和 es6）
+ [style-loader](https://github.com/webpack/style-loader)（js require css）
+ [css-loader](https://github.com/webpack/css-loader)（js require css）
+ [sass-loader](https://github.com/jtangelder/sass-loader)（解析scss）
+ [postcss-cssnext](https://github.com/MoOx/postcss-cssnext)（css自动补全浏览器前缀已经使用一些未来的css标准）
+ [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)（用于打包时分离js和css）
+ [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)(react代码规则) 
+ [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)(复制入口文件)


## 配置文件说明

1. webpack.base.config.babel.js，生产和开发环境共用配置
2. webpack.dev.config.babel.js，开发环境配置
3. webpack.prod.config.babel.js，生产环境配置
