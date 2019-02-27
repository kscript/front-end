## 关于这个静态网站
虽然个人博客已经运行了很长时间, 偶尔也流水账似的写写博文, 但却一直都没有对 自己写过和用过的工具/代码 做整理.  
最近闲暇, 花了几天时间, 搭了一个类似于gitbook布局的框架, 准备以后放置些自己用得上的东西. 嗯, 就是这样~   

## 基本情况
网站搭得比较简单
  - 脚手架使用的是 [vue-cli](//cli.vuejs.org/zh/guide/)
  - UI方面使用的是 [element-ui](//element-cn.eleme.io)
  - 网站的展示使用 [vue-markdown](https://github.com/miaolz123/vue-markdown) 组件
  
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

## 内容更新

> 版本 0.2.1 新增网站部署后的配置文件(/public/config.json), 可以更方便的配置 **左侧列表的路由** 和 **右侧文档的地址** 等网站相关的信息  
  另外, 如果将路由和文档设置为外部文件, 那么就不需要纠结改 docs/public 文件夹了, 降低数据丢失的风险

前面已经多次提到过, 这是一个静态的网站, 所以内容更新的话, 通过修改文件内容就可以了.  
 - 左侧列表的更新, 修改 api/routes.json 文件
 - 右侧内容的更新, 在 md 文件夹下新增和修改  
   
上面提到的文件/文件夹的路径, 只有在已经打包部署, 且以后都不再重新打包时, 才在 docs 文件夹修改.  
否则, 都应该在 public 文件夹进行修改, 这是因为 **重新打包时 会移除docs文件夹**  

