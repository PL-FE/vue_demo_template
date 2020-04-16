const path = require('path')
module.exports = {
  publicPath: './',
	// 输出文件目录
  outputDir: './dist',
  assetsDir: '/assets',
  lintOnSave: false,
  configureWebpack: (config) => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'],//请求本地json
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages')
        } // 别名配置
      }
    })
  }
}
