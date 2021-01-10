const index = resolve => require(['@/pages/index/views/index'], resolve);
//首页

const router = {
	'path': '/',
	'name': 'index',
	'component': index
};

export default router;