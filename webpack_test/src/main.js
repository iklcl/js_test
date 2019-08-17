import $ from 'jquery'

import './css/index.css'
//安装 cnpm i style-loader css-loader -D
//在webpack.config.js配置节点
import './css/index.less'
//安装 cnpm i less-loader -D
import './css/index.scss'
//安装 cnpm i sass-loader -D

//依赖url-loader file-loader
import 'bootstrap/dist/css/bootstrap.css'


$(function(){
	$('li:odd').css('background','#6BD089');
	$("li:even").css("background","#60C5F1");
})