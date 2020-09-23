/*
 * @LastEditTime: 2020-09-23 18:56:40
 * @LastEditors: jinxiaojian
 */
module.exports = {
  entry: {
    main: './main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development',
  optimization: {
    minimize: false
  }
}