const layout = resolve => require(["@/pages/assets/layout"], resolve);
//组织设置

const index = resolve => require(["@/pages/assets/views/index/index"], resolve);
//资产汇总


const router = {
	path: "/assets",
	name: "assets",
	component: layout,
	redirect: "/assets/index",
	children: [{
		path: "index",
		name: "index",
		component: index,
		meta: {
			title: "资产汇总",
		},
	}]
};

export default router;