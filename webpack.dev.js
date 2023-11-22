const webpackCommon = require('./webpack.common');
const path = require('path');

module.exports = {
  ...webpackCommon,
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    port: 3007,
    compress: true,
    client: {
      overlay: false,
    },
  },
};
