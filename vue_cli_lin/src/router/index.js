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
		assetsRouter,
		// sendCarRouter,
		// elearning,
		// materielApply,

	]
});

export default router;