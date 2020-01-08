<template>
	<div>
		<el-upload ref="up" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture"
			:on-change="handleChange" :on-remove="handleRemove" :file-list="fileList" :show-file-list="!false">
			<el-button size="small" type="primary">点击上传</el-button>
			<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			<div slot="file" slot-scope="_file">

				<img class="el-upload-list__item-thumbnail" v-if="_file.file.status !== 'uploading'"
					:src="_file.file.url" />
				<div class="el-upload-list__item-name" @click="handlePreview(_file.file)">
					{{_file.file.name}}
				</div>
				<!-- <label class="el-upload-list__item-status-label">
					<i class="el-icon-upload-success el-icon-check"></i>
				</label>
				<i class="el-icon-close" v-if="!disabled" @click="$emit('remove', _file.file)"></i> -->
				<el-progress v-if="_file.file.status === 'uploading'" type="line" :stroke-width="2"
					:percentage="parsePercentage(_file.file.percentage)">
				</el-progress>
			</div>
		</el-upload>
		<hr />
		{{partList}}
	</div>
</template>
<script>
	import DUpload from "./DUpload.vue";
	export default {
		data() {
			return {
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				partList: [],

				// disabled: false,
				// listType: "picture",
			};
		},
		components: {
			DUpload,
		},
		methods: {
			parsePercentage(val) {
				return parseInt(val, 10);
			},
			handleChange(file, fileList) {
				this.fileList = fileList.slice(-3);
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
				this.partList.push(file)
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${file.name}？`);
			},

		},
		mounted() {
		},
	}
</script>