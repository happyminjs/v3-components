const path = require('path')
const resolve = filePath => path.join(__dirname, './', filePath)

module.exports = {
  outputDir: 'docs',
  publicPath: '/v3-components/',
  devServer: {port: '3366'},
  pages: {
    index: {
      entry: resolve('story/main.ts'),
      template: 'public/index.html',
      filename: 'index.html',
      title: 'v3-components',
    },
  },
  chainWebpack: config => {
    config.plugins
    // 去掉 index 页面中 script 标签默认加上的 defer 和 async 属性
      .delete('prefetch-index')
      .delete('preload-index');
    config.resolve.alias
      .set('story', resolve('story'))
  }
}