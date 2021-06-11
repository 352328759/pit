<template>
	<div class="shop">
		<div @click="fixed('processStatements')">fixed</div>

		<el-table ref="processStatements" :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="" :fixed="true" />
			<el-table-column prop="name" label="姓名" :fixed="true" />
			<el-table-column prop="address" label="地址" />
			<el-table-column prop="vu1" label="vu1-qqwwee" />
			<el-table-column prop="vu2" label="vu2-qqwwee" />
			<el-table-column prop="vu3" label="vu3-qqwwee" />
			<el-table-column prop="vu4" label="vu4-qqwwee" />
			<el-table-column prop="vu5" label="vu5-qqwwee" />
			<el-table-column prop="vu6" label="vu6-qqwwee" />
			<el-table-column prop="vu7" label="vu7-qqwwee" />
			<el-table-column prop="vu8" label="vu8-qqwwee" />
			<el-table-column prop="vu9" label="vu9-qqwwee" />
			<el-table-column prop="vu1" label="vu1-qqwwee" />
			<el-table-column prop="vu2" label="vu2-qqwwee" />
			<el-table-column prop="vu3" label="vu3-qqwwee" />
			<el-table-column prop="vu4" label="vu4-qqwwee" />
			<el-table-column prop="vu5" label="vu5-qqwwee" />
			<el-table-column prop="vu6" label="vu6-qqwwee" />
			<el-table-column prop="vu7" label="vu7-qqwwee" />
			<el-table-column prop="vu8" label="vu8-qqwwee" />
			<el-table-column prop="vu9" label="vu9-qqwwee" />
			<el-table-column prop="vu1" label="vu1-qqwwee" />
			<el-table-column prop="vu2" label="vu2-qqwwee" />
			<el-table-column prop="vu3" label="vu3-qqwwee" />
			<el-table-column prop="vu4" label="vu4-qqwwee" />
			<el-table-column prop="vu5" label="vu5-qqwwee" />
			<el-table-column prop="vu6" label="vu6-qqwwee" />
			<el-table-column prop="vu7" label="vu7-qqwwee" />
			<el-table-column prop="vu8" label="vu8-qqwwee" />
			<el-table-column prop="vu9" label="vu9-qqwwee" />
		</el-table>

		<!-- <div class="head">
			<a class="logon_link" href="hjavascript:void(0);">
				<div class="logo"></div>
			</a>
			<div class="sep"></div>
			<h2>选择栏目</h2>
			<span class="right">+86-{{$store.getters.userInfo.data.mobile}}<span class="sep">-</span>
			<a href="javascript:void(0);" @click.stop="handleLogout">退出</a>
			</span>
		</div> -->
		<div class="select">
			<!-- <div class="infobar">
				<img alt="头像" class="avatar" src="https://img.yzcdn.cn/upload_files/avatar.png">
				<h3>{{$store.getters.userInfo.data.workName}}</h3>
				<p>+86-{{$store.getters.userInfo.data.mobile}}
					<a class="info-setting" href="javascript:void(0);">设置</a>
				</p>
			</div> -->
			<div style="height: initial;">
				<div class="box">
					<ul class="dp-list">
						<!-- 企业用车 -->
						<!--<router-link tag="li" class="dp-item" title="派车系统" :to="{name:'sendCar'}" v-if="Irole == 'ADMIN' || Irole == 'CAR'">
							<div class="dp-title"><span class="dp-text">派车系统</span></div>
							<p>主体信息：管理公司车辆</p>
							<span class="type">管理</span>
						</router-link>-->

						<!-- 在线教育 -->
						<!-- <router-link tag="li" class="dp-item" title="在线教育" :to="{name:'elearning'}" v-if="Irole == 'ADMIN' || Irole == 'LEARNING'">
							<div class="dp-title"><span class="dp-text">在线教育</span></div>
							<p>主体信息：在线教育</p>
							<span class="type">管理</span>
						</router-link> -->

						<!-- 物料申请 -->
						<!--<router-link tag="li" class="dp-item" title="物料申请" :to="{name:'materielApply'}" v-if="Irole == 'ADMIN' || Irole == 'MATERIEL'">
							<div class="dp-title"><span class="dp-text">物料申请</span></div>
							<p>主体信息：物料申请</p>
							<span class="type">管理</span>
						</router-link>-->

					</ul>
				</div>
			</div>
		</div>
		<div class="foot">© sotemall.com 版权所有</div>

	</div>
</template>
<script type="text/javascript">
	// import '@/assets/style/index/index.css';
	import dTable from './table';

	export default {
		'name': 'Index',
		components: {
			dTable
		},
		data() {
			return {
				tableData: [],
			}
		},
		methods: {
			// handleLogout: function() {
			// 	this.$http.get('/logout').then(() => {
			// 		this.$store.dispatch('StoreUser/removeUser').then(() => {
			// 			this.$router.push('/login');
			// 		});
			// 	});
			// }
			fixed(tab) {
				var _this = this
				var _tab = this.$refs[tab]
				var _headerHeight = _tab.$refs.headerWrapper.offsetHeight + "px"
				_tab.$refs.bodyWrapper.style.marginTop = _headerHeight
				_tab.$refs.headerWrapper.style.position = "fixed"
				_tab.$refs.headerWrapper.style.zIndex = "9"
				_tab.$refs.headerWrapper.style.top = "0px"

				var hasFixedWrapper = Object.prototype.hasOwnProperty.call(_tab.$refs, "fixedWrapper")

				if (hasFixedWrapper) {
					var _fixedWidth = _tab.$refs.fixedWrapper.offsetWidth + "px"
					_tab.$refs.fixedHeaderWrapper.style.position = "fixed"
					_tab.$refs.fixedHeaderWrapper.style.zIndex = "10"
					_tab.$refs.fixedHeaderWrapper.style.top = "0px"
					_tab.$refs.fixedHeaderWrapper.style.width = _fixedWidth
					_tab.$refs.fixedHeaderWrapper.style.overflow = "hidden"
				} else {
					console.log("not fixedWrapper")
				}

			},
		},
		computed: {
			Irole: function () {
				// if(this.$store.getters.userInfo.data.role == null) {
				return "ADMIN"
				// } else {
				// return this.$store.getters.userInfo.data.role
				// }
			}
		},
		beforeMount() { },
		mounted: function () {

			for (var i = 0; i < 3; i++) {
				this.tableData.push({
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					vu1: '在龙珠超的最新话当中，地球',
					vu2: '兰诺拉的强大已经有了心理准备',
					vu3: '仅一击就将悟空打到半死',
					vu4: '了让比鲁斯引以为傲的破坏能',
					vu5: '贝吉塔的谈话中我们知道，破坏能量不仅是',
					vu6: '传统的招式只是用能量把物体打碎',
					vu7: '传统的招式只是用能量把物体打碎',
					vu8: '传统的招式只是用能量把物体打碎',
					vu9: '传统的招式只是用能量把物体打碎',
				})
			}


			// this.$nextTick(function () {
			// 	this.fixed("processStatements")
			// })

		},
	};
</script>