<template>
	<footer v-on:click="changeStr()">
		<p>{{footText}} {{titleStr}}</p>
	</footer>
</template>

<script>
	export default {
		name:'app-footer',
		props:{
			titleStr:{
				type:String
			}
		},
		data() {
			return {
				footText:'footer/@2019-6-9'
			};
		},
		methods:{
			changeStr:function(){
				// this.titleStr='changed'
				//注册时间
				this.$emit('titleChanged','子组件呼叫父组件');
				console.log('事件生成');
			}
		}
	}
</script>

<style scoped>
footer{
	background: #BFBFBF;
	padding: 10px;
}
p{
	color: #080808;
	text-align: center;
}
</style>
