<template>
	<div>
		<Upload0></Upload0>
		<hr />
		<!-- <Upload1></Upload1>
		<hr />
		<Upload2></Upload2>
		<hr />
		<Upload3></Upload3>
		<hr />
		<Upload4></Upload4>
		<hr />
		<Upload5></Upload5>
		<hr />
		<Upload6></Upload6>
		<hr />
		<Upload7></Upload7>
		<hr />
		<Upload8></Upload8> -->
	</div>

</template>
<style>
</style>
<script>
	import Upload0 from "./lin/Upload0.vue";
	import Upload1 from "./lin/Upload1.vue";
	import Upload2 from "./lin/Upload2.vue";
	import Upload3 from "./lin/Upload3.vue";
	import Upload4 from "./lin/Upload4.vue";
	import Upload5 from "./lin/Upload5.vue";
	import Upload6 from "./lin/Upload6.vue";
	import Upload7 from "./lin/Upload7.vue";
	import Upload8 from "./lin/Upload8.vue";

	export default {
		data() {
			return {
				// fileList: [],
				fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],

				imageUrl: '',
			};
		},
		mounted() {
		},
		computed: {},
		components: {
			//组件
			Upload0,
			Upload1,
			Upload2,
			Upload3,
			Upload4,
			Upload5,
			Upload6,
			Upload7,
			Upload8,
		},
		methods: {
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
				console.log(res, file)
				console.log(this.fileList)
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${file.name}？`);
			}
		}
	}
</script>