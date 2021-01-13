import indexRouter from "@/pages/index/router.js";
import assetsRouter from "@/pages/assets/router.js";

var router = {
	// mode: 'history',
	"routes": [
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
}

export default router;