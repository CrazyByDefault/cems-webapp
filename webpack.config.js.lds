const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                options: {
                  "presets": [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    {
                        "plugins": [
                          "@babel/plugin-proposal-object-rest-spread",
                          "@babel/plugin-proposal-export-default-from",
                          "@babel/plugin-proposal-export-namespace-from",
                          [
                              "@babel/plugin-proposal-class-properties",
                              {
                                  "loose": true
                              }
                          ]
                        ]
                    }
                  ]
                },
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules/@salesforce/design-system-react'),
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    {
                        use: [{ loader: 'css-loader' }]
                    }
                )
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }),
        new ExtractTextPlugin('[name].css'),
    ]
};
