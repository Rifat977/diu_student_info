const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    headers: {
      "Allow-Access-Control-Origin" : "*"
    }
  },
  transpileDependencies: true
})
