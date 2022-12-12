const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'production';
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            'handlebars': 'handlebars/dist/handlebars.js'
        }
    },
    mode: NODE_ENV,
    entry: path.resolve(__dirname, 'src/pages/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        },
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                            },
                            sourceMap: IS_DEV,
                        }
                    }
                ],
            },
            {
                test: /\html$/,
                use: "html-loader",
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash:8].[ext]',
                    },
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                }
            },

        ]
    },
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV,
    },
    devtool: IS_DEV ? 'source-map' : false,
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendors'
        },
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
                extractComments: !IS_DEV,
                terserOptions: {
                    sourceMap: IS_DEV
                }
            })
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['!*.woff', '!*.woff2', '!*.ttf', '!*.eot', '!*.svg', '!*.png']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, 'src/pages/index.html'),
            minify: {
                collapseWhitespace: IS_PROD,
            },
            inject: "body",
        }),
        new NodePolyfillWebpackPlugin(),
    ]
}
