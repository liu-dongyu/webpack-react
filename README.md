## 环境要求
```  
nodejs: v4.4.7+
```

## 安装依赖

```    
npm install
```
```
// 淘宝源
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```

## 开始
1. `npm start`
2. 用浏览器打开 http://localhost:3000

## 其他指令
```
// 更新依赖
npm run update

// 打包
npm run build 

// 修正css代码格式
npm run stylefmt
```

## 已配置的内容
### 共用
1. 解析 `es6` `scss`
2. 图片 `hash` 命名
3. 自动打包 `javascript` `css` 中的图片
4. 自动打包 `html`，引用带 `hash`
5. 自动补全 `css` 浏览器前缀
6. 添加 `css` 浏览器兼容性检查
7. 自动修复存在的 `css` 语法错误

### 开发环境
1. `javascript` `css` 热更新
2. `eslint` `stylelint` 代码格式检查
3. 自动按 `.stylelintrc` 修正 `css` 代码格式
 
### 生产环境
1. 去除jsx中的 `console.log & console.error & alert`
2. `css` 打包成文件
3. 提取第三方 `javascript` 依赖单独打包 
4. 代码压缩

> [webpack配置解释参考](https://github.com/liu-dongyu/frontend-notes/issues/16)
