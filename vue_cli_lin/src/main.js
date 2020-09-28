import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// import axios from 'axios';
// Vue.prototype.$http = axios;


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
