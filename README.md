## front-tools
一个存放前端工具集的静态网站 [在线demo](https://kscript.github.io/front-tools/)  

### 安装及使用
```
  // clone 项目到本地
  git clone https://github.com/kscript/front-tools.git

  // 打开项目所在目录
  cd front-tools

  // 安装项目依赖
  npm i

  // 运行项目
  npm run serve

  // 打包项目
  npm run build
```

### 注意事项
  - 项目部署在非根目录时, 需修改 [build](./config/build.js) 和 [runtime](./config/runtime.js) 文件的 publicPath 属性
