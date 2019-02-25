## front-end
[一个有关于前端的静态网站](https://kscript.github.io/front-end/)  

### 安装及使用
```
  // clone 项目到本地
  git clone https://github.com/kscript/front-end.git

  // 打开项目所在目录
  cd front-end

  // 安装项目依赖
  npm i

  // 运行项目
  npm run serve

  // 打包项目
  npm run build
```

如果项目部署在非根目录, 那么在打包时, 修改 config/build.js 和 config/runtime.js 文件的 publicPath 属性
