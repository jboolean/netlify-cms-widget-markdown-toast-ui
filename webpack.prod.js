const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Webpack configuration
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false,
    }),
  ],
});
