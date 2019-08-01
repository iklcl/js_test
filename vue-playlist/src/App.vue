<template>
	<div id="app">
		<ul>
			<el-button type='primary' class="el-icon-goblet-square-full">
				<router-link :underline="false" to='/' type="danger">Home</router-link>
			</el-button>
			<el-button class="el-icon-edit">
				<router-link to='/helloworld' :underline="false" type="danger">HelloWorld</router-link>
			</el-button>
			<el-button class="el-icon-edit">
				<router-link to='/nav' :underline="false" type="danger">nav</router-link>
			</el-button>
			<el-button class="el-icon-edit">
				<router-link :to="{name:'nav2'}" :underline="false" type="danger">nav2</router-link>
			</el-button>
			<el-button class="el-icon-edit">
				<router-link to='/huho' :underline="false" type="danger">huho</router-link>
			</el-button>
			<el-button type="text" @click="dialogFormVisible = true">我的资料</el-button>

			<el-dialog title="HUHO" :visible.sync="dialogFormVisible" width='60%' top='30px' center=true lock-scroll=false>
				<div class="co_profile">
					<div class="logo t_center">
						<img :src="this.sysUserAvatar" alt="logo">
						<i class="no_v"></i></div>
					<div class="co_name t_center">HUHO</div>
					<div class="co_base">
						<a href="https://github.com/iklcl" target="_blank">
							<span class="type"><i class="icon"></i>Github</span>
						</a>
						<span style="width: 20px;"></span>
						<span class="members"><i class="el-icon-phone" style="font-size: 18px;"></i>13147049545</span>
					</div>
					<div class="co_intro t_center">
						<p><i class="el-icon-document"></i>基本信息</p>
						<div class="info">
							<ul>
								<li>
									22岁（男）
								</li>
								<li>
									深圳 龙华
								</li>
								<li>
									2年工作经验
								</li>
								<li>
									江西信息应用职业技术学院(大专) 软件工程专业
								</li>
							</ul>
						</div>
					</div>
					<div class="aboutMe">
						<el-container>
							<el-header><i class="el-icon-loading"></i>自我评价</el-header>
							<el-main>
								<p>上进心强、勤于学习能不断提高自身的能力与综合素质。性格稳重、有活力，待人热情、真诚；工作认真负责，积极主动，能吃苦耐劳，用于承受压力，勇于创新；具有较强的适应能力；纪律性强，工作积极配合。</p>
							</el-main>
						</el-container>
					</div>
					<div class="skills">
						<el-container>
							<el-header><i class="el-icon-minus"></i>技能介绍<i class="el-icon-minus"></i></el-header>
							<el-main>
								<el-row>
									<el-col :span="6">
										Javascript
									</el-col>
									<el-col :span="18">
										<el-progress :stroke-width="8" :percentage="80" color="#5668A6"></el-progress>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="6">
										Vue
									</el-col>
									<el-col :span="18">
										<el-progress :stroke-width="8" :percentage="65" color="#C22E2E"></el-progress>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="6">
										Html5/Css3
									</el-col>
									<el-col :span="18">
										<el-progress :stroke-width="8" :percentage="70" color="#6FB737"></el-progress>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="6">
										Jquery
									</el-col>
									<el-col :span="18">
										<el-progress :stroke-width="8" :percentage="70" color="#563D7C"></el-progress>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="6">
										Bootstrap
									</el-col>
									<el-col :span="18">
										<el-progress :stroke-width="8" :percentage="75" color="#00758F"></el-progress>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="6">
										数据库
									</el-col>
									<el-col :span="18">
										<el-progress :stroke-width="8" :percentage="70" color="#009688"></el-progress>
									</el-col>
								</el-row>	
								<el-row>
									<p>其他技能</p>
								</el-row>
								<el-row :gutter="100">
									<el-col :span="8">
										<el-progress type="dashboard" :percentage="85" color="#C23531"></el-progress>
										<div class="grid-content bg-purple">Linux</div>
									</el-col>
									<el-col :span="8">
										<el-progress type="circle" :percentage="80" color="#91C7AE"></el-progress>
										<div class="grid-content bg-purple">
											python
										</div>
									</el-col>
									<el-col :span="8">
										<el-progress type="circle" :percentage="50" color="#D18063"></el-progress>
										<div class="grid-content bg-purple">
											C#
										</div>
									</el-col>
								</el-row>
							</el-main>
						</el-container>
					</div>

					<div class="perfect_info">
						<a href="/feedback/appeal/com?companyId=3131" class="links">公司信息不准确？我要反馈！</a>
					</div>
				</div>
			</el-dialog>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				sysUserAvatar: './static/logo2.png',
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'
			}
		}

	}
</script>

<style scoped="">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		margin-top: 10px;
	}
a{color: #595959;
	text-decoration: none;}
	.co_profile {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.co_name {
		font-size: 26px;
		font-weight: 400;
	}

	.co_base {
		margin: 10px 0 5px 0px;
		/* width: 25%; */
		display: flex;
		justify-content: space-between;
	}

	img {
		width: 120px;
		margin: 10px 10px 10px 18px;
	}

	.icon {
		display: inline-block;
		width: 15px;
		height: 15px;
		background-image: url(../static/github.png);
		background-size: 15px 15px;
		background-position: center;
		background-repeat: no-repeat;
	}

	.co_intro {
		margin-top: 30px;
	}

	.co_intro>p {
		line-height: 60px;
		/* background-color: #D3DCE6; */
		color: #333;
		font-size: 24px;
		font-weight: 100;
		margin-bottom: 0 !important;

	}

	span.members {
		font-size: 14px;
	}

	.info {
		padding: 10px 30px;
		background-color: #E9EEF3;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		justify-content: space-around;
		justify-content: center;
		width: 80%;
		margin-left: 10%;
	}

	li {
		flex-grow: 1;
		flex-basis: 100px;
		padding: 3px;
		/* border:1px solid #222222 ; */
		margin: 10px;
	}

	.aboutMe {
		width: 100%;
		margin-top: 50px;
		padding: 0 50px;
	}

	.aboutMe>.el-container>.el-main {
		/* padding: 10px 100px !important; */
		width: 82%;
		margin-left: 9%;
	}

	.el-header {
		color: #333;
		text-align: center;
		line-height: 40px;
		font-size: 24px;
		height: 40px !important;
	}

	.el-main {
		background-color: #E9EEF3;
		/* color: #333; */
		text-align: center;
		/* line-height: 160px; */
	}


	.skills {
		margin-top: 30px;
	}

	.el-row {
		margin: 20px 0;
	}
</style>
