import Vue from 'vue'

console.log(Vue.version)

import router from './router/index.js';

import store from './store/index.js';

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

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')

// http://localhost:1718/
