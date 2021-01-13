<template>
	<div class="shop">
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
						<router-link tag="li" class="dp-item" title="在线教育" :to="{name:'elearning'}" v-if="Irole == 'ADMIN' || Irole == 'LEARNING'">
							<div class="dp-title"><span class="dp-text">在线教育</span></div>
							<p>主体信息：在线教育</p>
							<span class="type">管理</span>
						</router-link>

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
	export default {
		'name': 'Index',
		'methods': {
			// handleLogout: function() {
			// 	this.$http.get('/logout').then(() => {
			// 		this.$store.dispatch('StoreUser/removeUser').then(() => {
			// 			this.$router.push('/login');
			// 		});
			// 	});
			// }
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
		mounted: function () { },
	};
</script>