import Vue from 'vue';
//引入状态管理
import Vuex from 'vuex';
Vue.use(Vuex);

import assets from "./modules/assets/assets";
import storeUser from "./modules/storeUser/storeUser";

var store = new Vuex.Store({
	modules: {
		assets,
		storeUser,
		StoreUser2: {
			state: {
				count2: 3
			},
			mutations: {
				increment(state) {
					state.count2++
				}
			},
			actions: {
				increment(context) {
					console.log("in 1");
					// return 1;
					// return new Promise(function (resolve, reject) {
					// 	console.log("in Promise")
					// 	setTimeout(() => {
					// 		console.log("in setTimeout")
					// 		// commit('someMutation')
					// 		reject()
					// 	}, 1000)
					// }).catch(function (params) {
					// 	console.log("in 1 catch")
					// });
				},
			},
		},
	},
	getters: {
		StoreUser_count: state => state.StoreUser2.count2,
		// $store.getters.StoreUser_count === $store.state.StoreUser
		StoreUserNum: function (state) {
			return function (id) {
				return state.StoreUser.count + id
			}
		},
	},
});

export default store;