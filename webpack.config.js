/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: './dist/vchart.min.js',
    library: 'vchart',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.common.js'
    }
  },
  externals: {
    chartist: {
      commonjs: 'chartist',
      commonjs2: 'chartist',
      amd: 'Chartist',
      root: 'Chartist'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      include: [path.resolve(__dirname, './src')]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};
