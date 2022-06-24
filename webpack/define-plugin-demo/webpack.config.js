const webpack = require('webpack');
module.exports = {
  entry: {
    demo1: './src/demo1/index.js',
    demo2: './src/demo2/index.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV_TYPE_1: true,
      ENV_TYPE_2: JSON.stringify('cloud'),
    })
  ]
}