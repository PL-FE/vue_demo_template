module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  /* 生产环境构建文件的目录 defalut: dist */

  outputDir: 'dist',

  /* 放置生成的静态文件目录（js css img） */

  assetsDir: 'static',

  /* 指定生成的index.html 输出路径 相对 default: index.html */

  indexPath: 'index.html',

  lintOnSave: process.env.NODE_ENV === 'production'
}
