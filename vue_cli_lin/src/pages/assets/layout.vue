<template>
	<div>
		<h1>Assets 模块</h1>

		<div>
			<h2>router-view: default</h2>
			<router-view></router-view>
		</div>

		<div>
			<h2>router-view: view1</h2>
			<router-view name="view1"></router-view>
		</div>

		<div>
			<h2>router-view: view2</h2>
			<router-view name="view2"></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
	//	import layout from "@/components/layout/layout";
	// import container from "@/components/Container/Container";

	export default {
		name: "elearningLayout",
		components: {
			// container: container
		},
		computed: {
			defaultActive: function () {
				if (this.$route) {
					return this.$route.path.split("/").slice(0, 3).join("/")
				} else {
					return ""
				}
			},
		},
		mounted: function () { },
	};
</script>