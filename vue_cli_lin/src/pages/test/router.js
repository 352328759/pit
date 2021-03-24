const layout = resolve => require(["@/pages/test/layout"], resolve);
//组织设置

const testAntdV = resolve => require(['@/pages/test/views/testAntdV/testAntdV'], resolve);
//首页

const router = {
	'path': '/test',
	'name': 'test',
	'component': layout,
		redirect: { name: 'testAntdV' },
		children: [{
		// path: "",
		path: "testAntdV",
		name: "testAntdV",
		// component: assetsIndex,
		components: { default: testAntdV },
		meta: {
			title: "test AntdV",
		},
	}],
};

export default router;