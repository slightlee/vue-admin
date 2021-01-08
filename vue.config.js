module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  }
}
