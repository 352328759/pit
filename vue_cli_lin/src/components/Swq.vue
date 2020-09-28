<template>
	<div class="createDelivery-page fullPage">

		<img class="littleLogo" src="http://www.souyute.com/resources/images/logo.png" alt="logo">
		<van-cell title="我的工号" v-bind:value="num" size="large" />
		<div class="block__title">请谨慎填写</div>

		<van-form validate-first @failed="onFailed" @submit="onSubmit">

			<van-field readonly clickable name="workType" :value="workType" label="工种" @click="showPicker = true" />
			<van-popup v-model="showPicker" position="bottom">
				<van-picker value-key="workType" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false"></van-picker>
			</van-popup>

			<van-field v-model="workRank" name="workRank" label="工位" :rules="[{ required: true, message: '请输入正确内容' }]" />
			<van-field v-model="qty" name="qty" label="交货数量" :rules="[{ required: true, validator: value3Validator, message: '请输入正确内容' }]" :formatter="value3formatter" />
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">提交</van-button>
			</div>
		</van-form>

	</div>
</template>

<style></style>
<script>
	import vant, { Toast } from 'vant';
	import axios from 'axios';
	import '../assets/style.css';

	export default {
		name: 'Swq',
		props: [],
		data: function () {
			return {
				apiUrl: "http://delive.stmall.com/api",
				num: "",

				submit_goods: [],
				columns: [],
				showPicker: false,

				workCode: "",
				workType: "",
				workRank: "",
				qty: "",
				// pattern: /\d{6}/,
			}
		},
		computed: {},
		components: {},
		watch: {},
		methods: {
			jsonToParams: function (param) {
				var paramsUrl = "";
				for (var key in param) {
					paramsUrl += "&" + key + "=" + param[key];
				}
				return paramsUrl.substr(1);
			},
			value3Validator(val) {
				return new Promise((resolve) => {
					this.Toast.clear();
					resolve(/\d+/.test(val));

					// vant.Toast.loading("验证中...");
					// setTimeout(() => {
					// }, 1000);
				});
			},
			value3formatter(value) {
				return value.replace(/[^\d]/g, "");
			},
			onFailed(errorInfo) {
				console.log("failed", errorInfo);
			},
			onSubmit(values) {
				var _this = this

				// 5
				var data = {
					num: _this.num, // 工号
					workRank: values.workRank, // 工位
					workCode: _this.workCode, // 工种编码
					workType: values.workType, // 工种
					qty: values.qty, // 交货数量
				}
				axios({
					method: "post",
					url: this.apiUrl + "/mask/commit_goods?" + _this.jsonToParams(data),
					data: {},
				}).then(function (response) {

					if (response.data.status === 200) {
						console.log(response.data.data)
						vant.Toast.success("提交成功!");
						// sessionStorage.setItem("groupData", JSON.stringify(response.data.data))
						setTimeout(function () {
							location.href = "updateDelivery.html?idList=" + response.data.data.idList;
						}, 2000)
					} else {
						vant.Toast.fail(response.data.msg);
					}
				}).catch(function (error) {
					console.log(error)
					vant.Toast.fail("请求失败,请稍后重试");
				});
			},
			onConfirm(value) {
				console.log(value)
				var _value = []
				for (var i = 0; i < this.submit_goods.length; i++) {
					if (this.submit_goods[i].workType === value) {
						_value = this.submit_goods[i]
						break;
					}
				}
				this.workCode = _value.workCode;
				this.workType = _value.workType;
				this.showPicker = false;
			},
		},
		created() { },
		mounted() {
			var _this = this
			this.num = sessionStorage.getItem("num");

			// 10
			axios({
				method: "post",
				url: this.apiUrl + "/mask/submit_goods",
				data: {},
			}).then(function (response) {
				if (response.data.status === 200) {
					// _this.submit_goods = response.data.data
					// for (var i = 0; i < response.data.data.length; i++) {
					// 	_this.columns.push(response.data.data[i].workType)
					// 	response.data.data[i].workCode
					// }
					_this.columns = response.data.data

					_this.workCode = _this.columns[0].workCode
					_this.workType = _this.columns[0].workType
				} else {
					vant.Toast.fail(response.data.msg);
				}
			}).catch(function (error) {
				Toast.fail("请求失败,请稍后重试");
			});
		},

	}
</script>