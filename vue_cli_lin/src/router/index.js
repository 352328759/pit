import Vue from 'vue'
import VueRouter from 'vue-router';

import indexRouter from "@/pages/index/router.js";
import assetsRouter from "@/pages/assets/router.js";

Vue.use(VueRouter);

const router = new VueRouter({
	// mode: 'history',
	routes: [
		// {
		// 	path: "/",
		// 	component: () => import("@/pages/Assets.vue")
		// },

		indexRouter,
		// assetsRouter,
		// sendCarRouter,
		// elearning,
		// materielApply,

	]
});
// router.addRoutes 动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的数组
// router.addRoutes([assetsRouter])
// console.log(router)

export default router;