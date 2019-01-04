var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
		entry : "./src/gulpjs/homePage.js", //配置入口文件路径 （相对路径）
		output : {
			//配置出口文件路径（绝对路径）
			path : path.resolve(__dirname,'./src/dist'), //__dirname : 是nodejs中的命令，获取当前文件所在的绝对路径。
			filename : "main.js"
		
		},
		plugins : [
			new HtmlWebpackPlugin({template : './src/html/homePage.html'})
		]
	}