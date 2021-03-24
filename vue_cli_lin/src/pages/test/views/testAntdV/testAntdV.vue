<template>
	<div class="aff" ref="aff">
		dd
		<div class="ant-modal-title">.ant-modal-title</div>
		<a-button type="primary" @click="showModal">
			Open Modal with async logic
		</a-button>
		<a-modal title="Title" :getContainer="getRefsAff" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel">
			<p>{{ ModalText }}</p>
		</a-modal>
	</div>
</template>
<style scoped>
	.aff {
		color: red;

	}

	.aff /deep/ .ant-modal-title {
		color: green;
	}
</style>
<script type="text/javascript">
	// import '@/assets/style/index/index.css';

	// import { Button, message } from 'ant-design-vue';
	import Vue from 'vue'
	import { Button, Modal } from 'ant-design-vue';
	Vue.use(Button);
	Vue.use(Modal);

	export default {
		'name': 'Test',
		data() {
			return {
				ModalText: 'Content of the modal',
				visible: false,
				confirmLoading: false,
			};
		},
		methods: {
			getRefsAff() {
				return this.$refs.aff
			},
			showModal() {
				this.visible = true;
			},
			handleOk(e) {
				this.ModalText = 'The modal will be closed after two seconds';
				this.confirmLoading = true;
				setTimeout(() => {
					this.visible = false;
					this.confirmLoading = false;
				}, 2000);
			},
			handleCancel(e) {
				console.log('Clicked cancel button');
				this.visible = false;
			},
		},
	};
</script>