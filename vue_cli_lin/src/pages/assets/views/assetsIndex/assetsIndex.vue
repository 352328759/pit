<template>
	<div class="hello">
		<a href="https://www.cnblogs.com/yuyujuan/p/9839705.html">https://www.cnblogs.com/yuyujuan/p/9839705.html</a>
		<br />
		<a href="https://router.vuejs.org/zh/guide/essentials/navigation.html">https://router.vuejs.org/zh/guide/essentials/navigation.html</a>
		<br />
		<a href="https://cli.vuejs.org/zh/guide/html-and-static-assets.html">https://cli.vuejs.org/zh/guide/html-and-static-assets.html</a>
		<br />
		<a href="https://juejin.cn/post/6844903813606801422">https://juejin.cn/post/6844903813606801422</a>
		<br />
		<a href="https://segmentfault.com/a/1190000018902037">https://segmentfault.com/a/1190000018902037</a>

		<section>
			<h1>router</h1>

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

			<div>mutations 方法名不能重复</div>
			<a href="https://vuex.vuejs.org/zh/guide/getters.html">https://vuex.vuejs.org/zh/guide/getters.html</a>

			<div>{{$store.state.StoreUser.count}}</div>
			<div>{{$store.state.StoreUser2.count2}}</div>
			<div>{{$store.getters.StoreUser_count.count}}</div>
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
			// this.$store.commit("increment")
			console.log(this.$store)
			console.log(this.$store.getters.StoreUser_count.count)
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