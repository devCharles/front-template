module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js'
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
            'css-loader',{
              options: {
                sourceMap: true
              }
            }
          ]
      }
    ]
  }
}
