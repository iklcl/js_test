// 导入处理路径的模块
    var path = require('path');
	const webpack = require('webpack')
	const htmlWebpackplugin=require('html-webpack-plugin')
    // 导出一个配置对象，将来webpack在启动的时候，会默认查找`webpack.config.js`，并读取这个文件中配置，来进行打包
    module.exports = {
    	// 入口文件
    	entry: path.resolve(__dirname, './src/main.js'),
    	// 出口文件
    	output: {
    		// 出口的路径
    		path: path.resolve(__dirname, 'dist'),
    		// 出口的文件名
    		filename: 'bundle.js'
    	},
		devServer:{
			open:true,
			port:3000,
			// contentBase:'src',
			hot:true
		},
		plugins:[ //配置插件节点
			new webpack.HotModuleReplacementPlugin(),
			new htmlWebpackplugin({
				template:path.join(__dirname,'./src/index.html'),
				filename:'index.html'
			})
		],
		module:{
			rules:[//所有第三方模块匹配规则
				{test:/\.css$/,use:['style-loader','css-loader']},
				{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
				{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
				{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=41808&[hash:8]-name=[name].[exit]'},
				//limit是给定的值，大于或等于则不会转base64字符串，小于则会
				{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			]
		}
    }
