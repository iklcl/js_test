<template>
  <div id="app">
		<app-header @titleChangedH="returndateTitle($event)" :titleStr="titleStr"></app-header>
		<!-- <h1>{{title}}</h1> -->
    <!-- <HelloWorld/> -->
		<users :users="users"></users>
		<app-footer @titleChanged="updateTitle($event)" :titleStr="titleStr"></app-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Users from './Users.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'App',
	data(){
		return{
			users:[
				{name:'henry',job:"web开发",show:false},
				{name:'henry',job:"web开发",show:false},
				{name:'henry',job:"web开发",show:false},
				{name:'henry',job:"web开发",show:false},
				{name:'henry',job:"web开发",show:false},
				{name:'henry',job:"web开发",show:false},
				{name:'henry',job:"web开发",show:false},
				{name:'henry',job:"web开发",show:false},
				{name:'henry',job:"web开发",show:false}
			],
			titleStr:'传递的是一个值(Number,String,Boolean)'
		}
	},
  components: {
		'users':Users,
		'app-header':Header,
		'app-footer':Footer
  },
	methods:{
		updateTitle:function(title){
			// conslole.log('执行了');
			this.titleStr=title;
		},
		returndateTitle:function(str){
			this.titleStr=str;
		}
	},
	created(){
		    this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
            {
              params: {wd: 'v'},
              jsonp: 'cb'
            }).then(res => {
              console.log(res.data)
            }, res => {
              console.log(res)
            })

	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:10px;
}
</style>
