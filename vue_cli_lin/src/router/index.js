import Vue from 'vue'
import VueRouter from 'vue-router';

import indexRouter from "@/pages/index/router.js";
import assetsRouter from "@/pages/assets/router.js";
import testRouter from "@/pages/test/router.js";

Vue.use(VueRouter);

const router = new VueRouter({
	// mode: 'history',
	routes: [
		// {
		// 	path: "/",
		// 	component: () => import("@/pages/Assets.vue")
		// },

		indexRouter,
		assetsRouter,
		testRouter,
		// sendCarRouter,
		// elearning,
		// materielApply,

	]
});

export default router;