const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //подключаем Extract text
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //для подключения jquery в плагинах

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.[chunkhash].js" //хеш в имени файла для исключения кеширования
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            //ExtractText
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })

            }
        ]
    },
    plugins: [
        //ExtractText
        new ExtractTextPlugin({
            filename: 'main.[chunkhash].css'
        }), //хеш в имени файла для исключения кеширования
        //Html обработчик
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        //подключаем jquery
        new webpack.ProvidePlugin({
            '$': 'jquery',
            //'jQuery': '../node_modules/jquery/jquery.js'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 9000
    }
};