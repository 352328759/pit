const layout = resolve => require(["@/pages/test/layout"], resolve);
//组织设置

const testAntdV = resolve => require(['@/pages/test/views/testAntdV/testAntdV'], resolve);
const testVue = resolve => require(['@/pages/test/views/testVue/testVue'], resolve);
//首页

const router = {
	'path': '/test',
	'name': 'test',
	'component': layout,
	redirect: {
		name: 'testAntdV'
	},
	children: [{
		// path: "",
		path: "testAntdV",
		name: "testAntdV",
		// component: assetsIndex,
		components: {
			default: testAntdV
		},
		meta: {
			title: "test AntdV",
		},
	}, {
		// path: "",
		path: "testVue",
		name: "testVue",
		// component: assetsIndex,
		components: {
			default: testVue
		},
		meta: {
			title: "test Vue",
		},
	}],
};

export default router;