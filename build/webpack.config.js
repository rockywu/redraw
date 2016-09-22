"use strict";
/**
 * Created by rocky on 16/9/22.
 */
var path = require("path");
var webpack = require('webpack');
module.exports = {
    entry: {
        main: "./index.js",
    },
    module: { //声明模块解析器
        loaders: [
            { //由于修改server.js修改该对象，请不要变更当前loader的数组位置
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    "babel-loader"
                ]
            }
        ]
    },
    externals: {},
    plugins : [
        //开启压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    output: {
        path: path.resolve(__dirname + "/../test/cache/"),
        publicPath: "/dist/",
        filename: "wp-redraw.js"
    },
    resolve: {//声明自动补全文件后缀, 自动补全js,jsx,less文件
        extensions: ['', '.js']
    }
};
