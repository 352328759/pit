var storeUser = {
	namespaced: true,
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++
		},
	},
	actions: {
		increment(context) {
			context.commit("increment")
		},
	},
	getters: {
		StoreUser_count: state => state.count,
	},
};

export default storeUser;