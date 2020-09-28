<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <VantLin/> -->
		<Swq></Swq>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue';
	import VantLin from './components/VantLin.vue';
	import Swq from './components/Swq.vue';

	export default {
		name: 'App',
		components: {
			HelloWorld,
			VantLin,
			Swq,
		}
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