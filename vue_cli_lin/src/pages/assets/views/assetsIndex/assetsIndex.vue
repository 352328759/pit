<template>
	<div class="hello">
		<a href="https://www.cnblogs.com/yuyujuan/p/9839705.html">https://www.cnblogs.com/yuyujuan/p/9839705.html</a>
		<br />
		<a href="https://cli.vuejs.org/zh/guide/html-and-static-assets.html">https://cli.vuejs.org/zh/guide/html-and-static-assets.html</a>
		<br />
		<a href="https://juejin.cn/post/6844903813606801422">https://juejin.cn/post/6844903813606801422</a>
		<br />
		<a href="https://segmentfault.com/a/1190000018902037">https://segmentfault.com/a/1190000018902037</a>

		<section style="display: none;">
			<h1>router</h1>

			<a href="https://router.vuejs.org/zh/guide/essentials/navigation.html">https://router.vuejs.org/zh/guide/essentials/navigation.html</a>
			<br />

			<!-- <div>this.$router 访问路由器，也可以通过 this.$route 访问当前路由</div> -->
			<!-- <div>name 注意不要重复</div> -->
			<!-- <div>匹配优先级 有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。</div> -->
			<!-- <div>含有通配符(*)的路由应该放在最后</div> -->
			<!-- <div>&lt;router-link :to="..."&gt;&lt;/router-link&gt; this.$router.push(...)</div> -->
			<!-- <div>children 配置就是像 routes 配置一样的路由配置数组</div> -->
			<!-- <div>addRouteRecord ?</div> -->
			<!-- <div>要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。</div> -->


			<div>router.beforeEach</div>
			<div>component.beforeRouteUpdate 怎么用?</div>

			<router-link to="/">首页</router-link> | <router-link to="/assets">资产汇总</router-link>
		</section>

		<section>
			<h1>store</h1>

			<a href="https://vuex.vuejs.org/zh/guide/structure.html">https://vuex.vuejs.org/zh/guide/structure.html</a>
			<br />

			<div>mutations 方法名不能重复</div>
			
			<div>getter 的优势在于将 state 计算后返回, 类似于计算属性</div>
			<div>让 getter 返回一个函数，来实现给 getter 传参; getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果</div>
			
			<div>actions 方法名不能重复</div>
			<div>store.dispatch() 是 [object Promise]</div>
			<div>就 Promise 的角度讲, actions 执行完会调用 resolve()</div>
			<div>actions return Promise 和不 return Promise 有什么区别?</div>
			<div>return Promise 可以触发 reject-catch, 不 return Promise 只能触发 resolve-then</div>
			
			<div>模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应</div>
			<div>action, mutation, getter 方法名不应该重复</div>
			<div>namespaced: true; 方法名前面要加上模块名 "模块名/方法名"</div>
			<div>namespaced 对模块生效, 默认 false</div>
			<div>getters 用 []; dispatch, commit 用 ()</div>
			<div>store.registerModule 方法注册模块</div>
			<div>store.unregisterModule(moduleName) 来动态卸载模块, 不能卸载静态模块</div>



			<div>{{$store.state.StoreUser.count}}</div>
			<div>{{$store.state.StoreUser2.count2}}</div>
			<!-- <div>{{$store.getters.StoreUser_count.count}}</div> -->

			<!-- <div>{{$store.getters.StoreUser_count}}</div> -->
			<!-- <div>{{$store.getters["StoreUser/StoreUser_count"]}}</div> -->
		</section>

	</div>
</template>

<script>
	export default {
		name: 'assetsIndex',
		props: {
			msg: String
		},
		methods: {},
		mounted: function () {
			var _this = this
			// console.log(this.$store)
			// console.log(this.$store.getters.StoreUserNum("ed"))


			var _a = _this.$store.dispatch("increment").then(function (params) {
				console.log("in then")
			}).catch(function (params) {
				console.log("in catch")
			}).then(function (params) {
				console.log("in 2 the")
			})

			console.log("end")
			console.log(Object.prototype.toString.call(_a))

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style> -->