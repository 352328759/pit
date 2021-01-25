import Vue from 'vue';
//引入状态管理
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
	modules: {
		StoreUser: {
			state: {
				count: 0
			},
			mutations: {
				increment(state) {
					state.count++
				}
			},
		},
		StoreUser2: {
			state: {
				count2: 2
			},
			mutations: {
				increment(state) {
					state.count2++
				}
			},
		},
	},
	getters: {
		StoreUser_count: state => state.StoreUser,
	},
});

export default store;