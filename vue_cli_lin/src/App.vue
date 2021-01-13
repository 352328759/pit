<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <VantLin/> -->
		<!-- <Swq></Swq> -->

		<el-menu :default-active="$route.path" mode="horizontal" @select="handleSelect" :router="true">
			<el-menu-item index="/">首页</el-menu-item>
			<el-menu-item index="/assets/assetsIndex" :route="{ name: 'assets'}">资产汇总</el-menu-item>
		</el-menu>
		<!-- route 优先于 index -->

		<router-view></router-view>
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue';
	// import VantLin from './components/VantLin.vue';
	// import Swq from './components/Swq.vue';

	export default {
		name: 'App',
		data() {
			return {
				activeIndex: '1',
			};
		},
		components: {
			// HelloWorld,
			// VantLin,
			// Swq,
		},
		methods: {
			handleSelect(key, keyPath) {
				// console.log(key, keyPath);
			}
		},
		mounted: function () { },
	}
</script>

<style>
	/* #app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	} */
</style>