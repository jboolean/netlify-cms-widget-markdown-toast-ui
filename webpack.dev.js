const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Webpack configuration
module.exports = merge(common, {
  entry: {
    hot: 'react-hot-loader/patch',
    demo: {
      import: path.join(path.resolve(__dirname, 'src'), 'index.ts'),
      dependOn: 'library',
    },
  },
  devtool: 'inline-source-map',
  optimization: {
    moduleIds: 'named',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, 'src'), 'app.html'),
    }),
  ],

  devServer: {
    port: '8081',
  },
});
