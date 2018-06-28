//файл настроек WebPack

// require - функция node.js, которая выполняет файл path.js и возвращает в переменную path значение,
// которое было помечено как экспортируемое в файле path.js. расширение .
// js можно не указывать.
// можно ничего не возвращать в path
// http://dnzl.ru/view_post.php?id=377
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //подключаем Extract text
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //для подключения jquery в плагинах

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.[chunkhash].js" //хеш в имени файла для исключения кеширования
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.jsx?$/,
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

            },

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
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            containers: path.resolve(__dirname, 'src/containers'),  //получают данные извне js с помощью ajax
            components: path.resolve(__dirname, 'src/components'),  //компоненты страниц
            pages: path.resolve(__dirname, 'src/pages'),            //собранные примеры страниц
            actions: path.resolve(__dirname, 'src/actions'),
            reducers: path.resolve(__dirname, 'src/reducers'),            
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 9000
    }
};