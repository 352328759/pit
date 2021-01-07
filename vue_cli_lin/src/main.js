import Vue from 'vue'

import VueRouter from 'vue-router';
import routerConfig from './router/index.js';
Vue.use(VueRouter);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

import App from './App.vue'

// import axios from 'axios';
// Vue.prototype.$http = axios;


Vue.config.productionTip = false

const router = new VueRouter(routerConfig)


new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
