module.exports = {
    // 选项...
    // 配置项 请参考 https://cli.vuejs.org/zh/config/#css-loaderoptions
    devServer: {
        proxy: {
          '/api': {
            target: '<url>', // 域名
            changeOrigin: true
          },
          '/foo': {
            target: '<other_url>'
          }
        }
      }
}