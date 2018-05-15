const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        main: ['babel-polyfill', './src/js/index.js'],
        // landing: './src/js/landing.js',
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'js/[name].bundle.min.js?[hash]',
        publicPath: '/',
    },
    devtool: 'source-map',
    // stats: 'minimal',
    // externals: {}, // global & AMD libs
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            js: __dirname + '/src/js/',
            img: __dirname + '/src/img/',
            font: __dirname + '/src/font/',
            style: __dirname + '/src/style/',
            views: __dirname + '/src/js/views/',
            store: __dirname + '/src/js/store/',
            actions: __dirname + '/src/js/store/actions/',
            components: __dirname + '/src/js/components/',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', { 'modules': false }],
                            'react',
                        ],
                        plugins: ['transform-object-rest-spread'],
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                }),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                include: /src\/img/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]?[hash]',
                    }
                }
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                include: /src\/font/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'font/[name].[ext]?[hash]',
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist/*']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico',
            // chunks: ['main'], // in this way splitChunks doesn't work
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'landing.html',
        //     template: './src/index.html',
        //     favicon: './src/favicon.ico',
        //     chunks: ['landing'],
        // }),
        new ExtractTextPlugin('css/[name].bundle.min.css?[hash]'),
        new CopyWebpackPlugin([
            // The "to:" paths are relative to the "output.path:" directory
            { from: './src/json', to: './json' },
        ]),
    ],
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: {
            index: '/index.html'
        },
        stats: 'minimal',
    },
};