const layout = resolve => require(["@/pages/assets/layout"], resolve);
//组织设置

const assetsIndex = resolve => require(["@/pages/assets/views/assetsIndex/assetsIndex"], resolve);
//资产汇总

const router = {
	path: "/assets",
	name: "assets",
	component: layout,
	redirect: {
		name: 'assetsIndex'
	},
	// redirect: { path: '/assets/assetsIndex' },
	children: [{
		// path: "",
		path: "assetsIndex",
		name: "assetsIndex",
		// component: assetsIndex,
		components: {
			default: assetsIndex
		},
		meta: {
			title: "资产汇总",
		},
	}],
};

const router1 = {
	path: "/assets",
	name: "assets",
	redirect: {
		name: 'assetsHome'
	},
}

export default router;