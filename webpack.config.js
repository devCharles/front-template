const webpack = require('webpack')
const path = require('path')
const name = require('./package.json').name + '.js'

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: name
  },
  devServer: {
    host: "0.0.0.0",
    stats: {
      colors: true,
      assets: true,
      version: false,
      hash: false,
      timing: false,
      chunks: false,
      chunkModules: false,
      children: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },{
          test: /\.(sass|scss)$/,
          use: [
            'style-loader',{
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },{
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
      },{
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  }
}
