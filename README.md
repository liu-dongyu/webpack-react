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
```

## 已配置的内容
### 共用
1. babel解析jsx中es6语法
2. 图片bast64,带hash
3. 自动打包字体图标，图片
4. 自动打包html,js/css引用带hash
5. 自动补全css浏览器前缀等

### 开发环境
1. 代码热加载
2. eslint,stylelint代码规范检查
3. sourceMap

### 生产环境
1. 去除jsx中的 `console.log & console.error & alert`
2. css拆分出js单独打包
3. 提取第三方js依赖单独打包 
4. 代码压缩

> [webpack配置解释参考](https://github.com/liu-dongyu/frontend-notes/issues/16)
