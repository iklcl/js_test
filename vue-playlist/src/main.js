// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VeuResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import HelloWorld from './components/HelloWorld'
//懒加载取代
// import Home from './components/Home'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VeuResource)
Vue.use(ElementUI)
/* eslint-disable no-new */
//配置路由
const router=new VueRouter({
	routes:[
		{path:"/",component: () => import('./components/Home'),name : 'Home',iconCls:"el-icon-s-home"},
		{path:"/nav",component:()=>import('./components/nav'),name:"nav",iconCls:"el-icon-s-promotion"},
		{path:"/nav2",component:()=>import('./components/nav2'),name:"nav2",iconCls:"el-icon-s-promotion"},
		{path:"/nav3",component:()=>import('./components/nav3'),name:"nav3",iconCls:"el-icon-s-promotion"},
		{path:"/tsg",component:()=>import('./components/TSG'),name:"tsg",iconCls:"el-icon-s-promotion"},
		{path:"/huho",component:()=>import('./components/huho'),name:"huho",iconCls:"el-icon-s-promotion",
// 		berforeEnter:(to, from, next)=>{
// 			if(to.path=='/tsg'|| to.path=='/nav'){
// 				next();
// 			}
// 			else{
// 				alert('不是访问tsg和nav');
// 				next('/tsg')
// 			}
// 		}
		},
// （1）第一种懒加载写法：
// component: (resolve) => require(['./components/Home'], resolve)
// （2）第二种懒加载写法：
// component: () => import('./components/Home')
		{path:"/helloworld",
		component:HelloWorld,
		// 路由内钩子
		name:"HelloWorld",
		beforeEnter: (to, from, next) => {
        console.log('进入前执行');
            next();
        },
				iconCls:"el-icon-s-custom"
				}
	],
	mode:"history"
})
// 全局路由拦截-进入页面前执行
// to: Route : 即将要进入的目标 [路由对象]
// from: Route : 当前导航正要离开的路由
// next: Function : 继续执行函数
// 
// next()：继续执行
// next(false)：中断当前的导航。
// next(‘/‘) 或 next({ path: ‘/‘ })：跳转新页面，常用于登陆失效跳转登陆
router.beforeEach((to, from, next) => {
    // 这里可以加入全局登陆判断
    // 继续执行
    next();
});

// 全局后置钩子-常用于结束动画等
router.afterEach(() => {
    //不接受next
})


new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
