<template>
	<div class="users">
		<ul>
			<li v-for="user in users" v-on:click="user.show=!user.show">
				<h2>{{user.name}}</h2>
				<h3 v-show="user.show">{{user.job}}</h3>
			</li>
		</ul>
		<button @click="deleteUsers" >删除</button>
	</div>	
</template>

<script>
	export default {
		name:'users',
		props:{
			users:{
				type:Array,
				required:true
			},
			// list:{}
		},
		data() {
			return {
				
			};
		},
		methods:{
			deleteUsers:function(){
				this.users.pop();
			}
		},
		    // 进入页面前调用
    beforeRouteEnter(to, from, next) {
        console.log('进入enter路由钩子')
        next()
    },
    // 离开页面调用
    beforeRouteLeave(to,from, next){
        console.log('进入leave路由钩子')
        next()
    },
    // 页面路由改变时调用
    beforeRouteUpdate(to, from, next) {
        console.log('进入update路由钩子')
        console.log(to.params.id)
        next()
    }
	}
</script>

<style scoped>
.users{
	width: 100%;
	max-width: 1200px;
	margin:40px auto;
	box-sizing: border-box;
}
ul{
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	padding: 0;
}
li{
	flex-grow: 1;
	flex-basis: 200px;
	padding: 30px;
	border:1px solid #222222 ;
	margin: 10px;
}
</style>
