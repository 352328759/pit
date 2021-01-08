<template>
	<div>
	<!-- <container>
		<a slot="pageTitle" href="javascript:void(0);">培训课程管理</a>
		<el-menu slot="pageSideBar" :default-active="defaultActive" class="el-menu-vertical-demo" :router="true">
			<el-menu-item v-if="$store.state.StoreUser.data.isAdmin" index="/elearning/group">组织设置</el-menu-item>
			<el-menu-item index="/elearning/groupUser">组织用户设置</el-menu-item>
			<el-menu-item index="/elearning/course">课程管理</el-menu-item>
			<el-menu-item index="/elearning/courseCat">课程分类管理</el-menu-item>
			<el-menu-item index="/elearning/coursePart">课程小节管理</el-menu-item>
			<el-menu-item index="/elearning/question">题库管理</el-menu-item>
			<el-menu-item index="/elearning/test">试卷管理</el-menu-item>
			<el-menu-item index="/elearning/plan">学习计划管理</el-menu-item>
			<el-menu-item index="/elearning/task">任务管理</el-menu-item>
			<el-menu-item index="/elearning/news">资讯管理</el-menu-item>
			<el-menu-item index="/elearning/topics">话题管理</el-menu-item>
			<el-menu-item index="/elearning/coin">金币奖励规则</el-menu-item>
			<el-menu-item index="/elearning/rpt">数据统计</el-menu-item>
			<el-menu-item index="/elearning/homeworkAudit">作业审核</el-menu-item>
		</el-menu>
	</container> -->
		<!-- <el-menu-item index="/assets">资产汇总</el-menu-item> -->
		<router-link to="/">首页</router-link> | <router-link to="/assets">资产汇总</router-link>
		<!-- <router-link to="/bar">Go to Bar</router-link> -->

		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	//	import layout from "@/components/layout/layout";
	// import container from "@/components/Container/Container";

	export default {
		name: "elearningLayout",
		components: {
			// container: container
		},
		computed: {
			defaultActive: function () {
				if (this.$route) {
					return this.$route.path.split("/").slice(0, 3).join("/")
				} else {
					return ""
				}
			},
		},
		mounted: function () { },
	};
</script>