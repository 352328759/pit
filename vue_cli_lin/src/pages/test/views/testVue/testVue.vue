<template>
	<div>
		<!--<img :src="link" />-->
	</div>
</template>
<style></style>
<script type="text/javascript">
	import QRCode from 'qrcode'
	export default {
		name: 'TestVue',
		data() {
			return {
				link: 'https://baidu.com'
			};
		},
		components: {
			QRCode
		},
		methods: {
			makeQRCode() {
				var _this = this
				QRCode.toDataURL("1," + "2").then(imgData => {
					if(imgData) {
						//						let file = this.convertBase64UrlToBlob(imgData);
						_this.link = imgData
						console.log(imgData)
					}
				});
			},
			//从 base64 转换成 file
			//			convertBase64UrlToBlob(urlData) {
			//				let bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte
			//				//处理异常,将ascii码小于0的转换为大于0
			//				let ab = new ArrayBuffer(bytes.length);
			//				let ia = new Uint8Array(ab);
			//				for(let i = 0; i < bytes.length; i++) {
			//					ia[i] = bytes.charCodeAt(i);
			//				}
			//				return new Blob([ab], {
			//					type: 'image/png'
			//				});
			//			},
		},
		mounted() {
			this.makeQRCode()
		},
	};
</script>