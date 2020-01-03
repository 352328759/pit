<template>
	<div>
		<h1>My</h1>
		<d-upload action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
			:on-remove="handleRemove" :before-remove="beforeRemove" :multiple="true" :on-exceed="handleExceed"
			:file-list="fileList">
			swq
			<el-button size="small" type="primary">点击上传</el-button>
			<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
		</d-upload>
		<hr />
		<d-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
			:on-preview="handlePictureCardPreview" :on-remove="handleRemove">
			<i class="el-icon-plus"></i>
		</d-upload>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>
</template>
<script>
	import DUpload from "./DUpload.vue";
	export default {
		data() {
			return {
				fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],

				dialogImageUrl: '',
				dialogVisible: false,
			};
		},
		components: {
			DUpload,
		},
		methods: {
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
			},

			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			}
		}
	}
</script>