const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  // entry: ["@babel/polyfill", './client/index.js'],
  entry: {
    index: './client/index.js'
  },
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
          emitWarning: true,
          failOnError: true,
          failOnWarning: false
        }
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
          test: /\.(svg|gif|jpe?g|png)$/,
          loader: 'url-loader?limit=10000'
      },
      {
          test: /\.(eot|woff|woff2|ttf)$/,
          loader: 'url-loader?limit=30&name=assets/fonts/webfonts/[name].[ext]'
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
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};