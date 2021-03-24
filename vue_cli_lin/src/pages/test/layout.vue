<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	//	import layout from "@/components/layout/layout";
	// import container from "@/components/Container/Container";

	export default {
		name: "assetsLayout",
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