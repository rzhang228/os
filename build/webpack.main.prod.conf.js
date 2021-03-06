const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConf = require('./webpack.main.base.conf')

console.log('当前运行环境：production')

module.exports = merge(baseConf, {
  plugins: [
    new webpack.DefinePlugin({
      // 定义全局变量
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})