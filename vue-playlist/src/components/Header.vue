<template>
	<header @click="setHeader">
		<h1 v-once>
			{{title}} {{titleStr}}
		</h1>
	</header>
</template>

<script>
	export default {
		name:'app-header',
		props:{
			titleStr:{
				type:String
			}
		},
		data() {
			return {
				title:"vue.js Demo"
			};
		},
		methods:{
			setHeader:function(){
				this.$emit('titleChangedH','点击header')
			}
		}
// 		beforeCreate:function(){
// 			alert("组件实例化之前执行");
// 		},
// 		created:function(){
// 			alert("组件实例化完毕，但页面还为显示");
// 		},
// 		beforeMount:function(){
// 			alert("组件挂在前，页面未显示，但虚拟DOM已经配置");
// 		},
// 		mounted:function(){
// 			alert("组件挂载后，此方法执行后，页面显示");
// 		},
// 		beforeUpdate:function(){
// 			alert("组件更新前，页面还为显示，但虚拟DOM已经配置")
// 		},
// 		updated:function(){
// 			alert("组件更新后，此方法执行后，页面显示");
// 		},
// 		beforeDestroy:function(){
// 			alert("组件销毁前");
// 		},
// 		destroyed:function(){
// 			alert("组件销毁");
// 		}
	}
</script>

<style scoped="scoped">
header{
	background: #008800;
	padding: 10px;
}
h1{
	color: #080808;
	text-align: center;
}
</style>
