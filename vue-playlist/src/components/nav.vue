<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="5" class="logo" :class="'logo-width'">
				<a href="/" style="text-decoration:none;color:#FFFFFF;">
					后台管理系统
				</a>
			</el-col>
			<el-col :span="2">
				<div class="tools" @click.prevent="collapse">
					<i class="el-icon-s-fold"></i>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="title">
					<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
					 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
						<el-menu-item index="1">处理中心</el-menu-item>
						<el-submenu index="2">
							<template slot="title">我的工作台</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
							<el-menu-item index="2-3">选项3</el-menu-item>
							<el-submenu index="2-4">
								<template slot="title">选项4</template>
								<el-menu-item index="2-4-1">选项1</el-menu-item>
								<el-menu-item index="2-4-2">选项2</el-menu-item>
								<el-menu-item index="2-4-3">选项3</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="3" disabled>消息中心</el-menu-item>
						<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
					</el-menu>
				</div>
			</el-col>
			<el-col :span="5" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner">
						你好：管理员
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<a href="#/">首页</a>
						</el-dropdown-item>
						<el-dropdown-item>
							<a href="javascript:;">修改密码</a>
						</el-dropdown-item>
						<el-dropdown-item>
							注销登录
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-bind:style=" collapsed ? {} : { 'width': '300px' } "
				 :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router v-show="!collapsed">

				</el-menu>
				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed el-menu-collapsed" v-show="collapsed" ref="menuCollapsed">


				</ul>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>

	</el-row>
</template>

<script>
	let data = () => {
		return {
			sysName: '后台管理系统',
			menuData: [],
			collapsed: false,
			sysUserName: '管理员',
		}
	}

	let initMenu = function() {

		for (let i in this.$router.options.routes) {
			let root = this.$router.options.routes[i]
			console.log(this.$router.options.routes[0], root);
			if (root.hidden)
				continue;
			this.menuData.push(root)
			// root.children = children
		}
	}

	export default {
		data: data,
		methods: {
			initMenu: initMenu,
			//折叠导航栏
			collapse: function() {
				this.collapsed = !this.collapsed;
			},
			showMenu: function(i, status) {
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
			}
		},
		mounted: function() {
			this.initMenu()
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;

		.header {
			height: 60px;
			line-height: 60px;
			background: #545c64;
			color: #fff;

			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;

				.userinfo-inner {
					cursor: pointer;
					color: #fff;

					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0 10px 10px;
						float: right;
					}
				}
			}

			.logo {
				height: 60px;
				font-size: 22px;
				padding-left: 20px;
				padding-right: 20px;
				border-color: rgba(238, 241, 146, 0.3);
				// 				border-right-width: 1px;
				// 				border-right-style: solid;

				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}

				.txt {
					color: #fff;
				}
			}

			.logo-width {
				width: 300px;
			}

			.logo-collapse-width {
				width: 60px;
			}

			.tools {
				padding: 0 23px;
				width: 14px;
				height: 60px;
				line-height: 60px;
				color: white;
				cursor: pointer;
			}
		}

		.main {
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0;
			overflow: hidden;

			aside {
				flex: 0 0 300px;
				width: 300px;

				/*侧边菜单*/
				.el-menu {
					height: 100%;
					background-color: #545c64;

					/*选中列*/
					.el-menu-item {
						background-color: #545c64;
					}

					.el-submenu__title {
						i {
							color: #fff;
						}
					}
				}

				.el-menu:first-child {
					overflow-y: auto !important;
				}

				.el-menu-collapsed li:hover {
					background-color: #434a50;
				}

				/*当前选中菜单*/
				.is-opened {
					color: #fff;
					background-color: #A6A6A6;
				}

				.collapsed {
					width: 60px;

					.item {
						position: relative;
					}

					.submenu {
						position: absolute;
						top: 0;
						left: 60px;
						z-index: 99999;
						height: auto;
						display: none;
					}
				}
			}

			.menu-collapsed {
				flex: 0 0 60px;
				width: 60px;
			}

			.menu-expanded {
				flex: 0 0 300px;
				width: 300px;
			}

			.content-container {
				flex: 1;
				overflow-y: scroll;
				padding: 20px;
				background-color: #d3d7d4;

				.breadcrumb-container {
					display: none;

					.title {
						width: 200px;
						float: left;
						color: #475669;
					}

					.breadcrumb-inner {
						float: right;
					}
				}

				.content-wrapper {
					box-sizing: border-box;
				}
			}
		}
	}
</style>
