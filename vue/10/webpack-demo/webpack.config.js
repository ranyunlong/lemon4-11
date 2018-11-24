// webpack是一个node程序，所以不能用es6的语法
// webpack默认只认识js文件和json文件
// 如果要让webpack处理其他文件 就需要用到loader来处理
// 不同的文件由不同的loader来处理的
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')


// webpack的配置文件
module.exports = {
    // 提供一个入口文件的地址
    entry: './src/main.js',
    // 打包好的文件该怎么处理
    output: {
        // 绝对路径
        path: path.resolve('dist'),
        // 输出的文件名称
        filename: 'bundle.js'
    },
    // 配置解析模块的配置
    module: {
        // 设置解析文件的规则
        // 每一个规则都是一个对象
        rules: [
            {
                // 匹配文件后缀
                test: /\.css$/,
                // 使用相关的解析loader
                // css 需要用
                // 1. css-loader (需要用npm安装)
                // 2. style-loader (需要用npm安装)
                // style-loader 用来把css文件添加到dom里
                // css-loader 是用来解析css文件的
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                // 处理图片路径
                // url-loader 是把图片处理成base64的字符串
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('index.html')
        })
    ],
    mode: 'development',  // production 生产模式  // development 开发模式
    resolve: {
        // 配置扩展名识别的
        extensions: [".js", ".json", ".css", ".less", ".vue"],
        // 给路径配置别名
        // 给模块配置别名
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': path.resolve('src')
        }
    },
    // 如果要使用webpack-dev-server来启动项目
    devServer:{
        proxy: { //如果遇到跨域问题， 可以使用他来处理
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {
                    '^/api': '/'
                }
            }
            // 路径重写
            // localhost:4000/api
            // http://localhost:3000/


            // localhost:4000/api/login
            // http://localhost:3000/login
           
        }, 
        // 配置静态资源目录
        contentBase: path.resolve('public'),
        compress: true,
        host: "localhost",
        port: 4000,
        open: true
    }
}