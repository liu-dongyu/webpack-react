### 介绍

基于 webpack4 的 React SPA 项目，仅用于学习，详细配置可查看 webpack.config.js，基本上每一行都有注释。

### 依赖

node 8.x || 9.x || 10.x

### 相关指令

```bash
# 生成模式构建
npm run build;

# 开发模式构建
npm run dev;

# 启动开发服务器
npm run serve;

# 对比master分支，格式化改动过的js和scss
npm run prettier;

# 格式化所有js和scss
npm run prettier-all;

# 更新package.json中的依赖版本
npm run ncu;
```

### 配置了什么

- 解析 ES6 和 jsx
- 解析 scss，开启 css-modules
- 使用 postcss，自动添加浏览器前缀等
- 处理 png/gif/jpg/jpeg
- eslint
- 生产环境 hash，分离 css 成独立文件
- 允许在 js 中直接引入 node_modules/src/static 下文件
- 使用 happypack，通过多线程提高构建速度
- 使用 webpack-dev-server 做开发服务器
- 将例如 react 等第三方库抽离，优化 2 次构建速度
- 使用 prettier 格式化 js 和 scss

### 问题

- url-loader 或 file-loader 配合 happypack，打包出来的图片是损坏的。[Issue](https://github.com/amireh/happypack/issues/233)

---

### Introduce

A react SPA project with webpack4, only for study, view webpack.config.js to get more details.

### Depend

node 8.x || 9.x || 10.x

### Directive

```bash
# Production bundle
npm run build;

# Development bundle
npm run dev;

# Start development server
npm run serve;

# Compare the master branch, format the changed js and scss
npm run prettier;

# Format all js and scss
npm run prettier-all;

# Update the dependent version in package.json
npm run ncu;
```
