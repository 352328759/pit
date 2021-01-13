const layout = resolve => require(["@/pages/assets/layout"], resolve);
//组织设置

const assetsIndex = resolve => require(["@/pages/assets/views/assetsIndex/assetsIndex"], resolve);
//资产汇总

const assetsIndex2 = resolve => require(["@/pages/assets/views/assetsIndex/assetsIndex2"], resolve);
const view1 = resolve => require(["@/pages/assets/views/assetsIndex/view1"], resolve);
const view2 = resolve => require(["@/pages/assets/views/assetsIndex/view2"], resolve);
const view3 = resolve => require(["@/pages/assets/views/assetsIndex/view3"], resolve);


const router = {
	path: "/assets",
	name: "assets",
	component: layout,
	redirect: { name: 'assetsIndex' },
	// redirect: { path: '/assets/assetsIndex' },
	children: [{
		// path: "",
		path: "assetsIndex",
		name: "assetsIndex",
		// component: assetsIndex,
		// components: { default: assetsIndex },
		components: {
			default: assetsIndex,
			view1: assetsIndex2,
			view2: view2,
		},
		meta: {
			title: "资产汇总",
		},
		children: [{
			path: "view1",
			components: {
				default: view3,
				view1: view1,
				view2: view2,
			},
		}, {
			path: "view2",
			component: view2,
		}, {
			path: "view3",
			component: view3,
		}],
	}],
};

const router1 = {
	path: "/assets",
	name: "assets",
	redirect: { name: 'assetsHome' },
}

export default router;