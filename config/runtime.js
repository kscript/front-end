// runtime.js 文件是项目运行阶段的配置, 使用 es6模块规范
// 生产环境/开发环境 运行阶段的一些配置, 可以在这里设置
export default {
  development: {
    publicPath: '/'
  },
  production: {
    publicPath: '/front-tools'
  }
}[process.env.NODE_ENV]
