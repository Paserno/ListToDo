const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

 
module.exports = {
 
    mode: 'development',
    output: {
        clean: true
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
            }
        ]
    },
    plugins: [
         new HtmlWebPack({
             title: 'Mi Webpack App',
             template: 'src/index.html'
         }),
         new MiniCssExtract({
            filename: '[name].css', //[fullhash] para crear un hash para que los clientes no tengan cashe del css
            ignoreOrder: false
         }),
         new CopyPlugin({
            patterns:[
                { from: 'src/asset/', to: 'asset/'}
            ]
         }),
    ]
 
 
}