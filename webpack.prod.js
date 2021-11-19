const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Teser = require('terser-webpack-plugin');


module.exports = {

    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']

            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Teser(),
        ]
    },
    plugins: [
        new HtmlWebPack({
            title: 'Mi Webpack App',
            template: 'src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].[fullhash].css', //[fullhash] para crear un hash para que los clientes no tengan cashe del css
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/asset/', to: 'asset/' }
            ]
        }),
    ]


}