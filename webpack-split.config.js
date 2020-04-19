const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ["@babel/polyfill", {
    index: './client/index.js'
  }],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        enforce: "pre",
        test: /\.js(x)?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: true,
          failOnWarning: false
        }
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  output:{
    path: path.resolve(__dirname, 'dist/app'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'sxy-uilibrary': path.resolve(__dirname, 'ui-library-npm/index'),
      'comp': path.resolve(__dirname, 'client/pages/Oops.jsx')
    }
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};