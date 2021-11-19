<template>
	<div>
		<div class="swq" ref="swq" v-d-infinite-scroll="load" :infinite-scroll-distance="10" style="overflow: auto;">
			<ul ref="ul">
				<li v-for="item in count" :key="item.key">{{ item.value }}</li>
			</ul>
		</div>
		<div style="float: left;">
			<span @click="fun1">fun1</span>
			<span @click="fun2">fun2</span>
			<span @click="fun3">fun3</span>
			<span @click="fun4">fun4</span>
		</div>
	</div>
</template>
<style></style>
<script type="text/javascript">
	import throttle from 'throttle-debounce/debounce';
	import {
		isHtmlElement,
		isFunction,
		isUndefined,
		isDefined
	} from 'element-ui/src/utils/types';
	import {
		getScrollContainer
	} from 'element-ui/src/utils/dom';

	const getStyleComputedProperty = (element, property) => {
		if(element === window) {
			element = document.documentElement;
		}

		if(element.nodeType !== 1) {
			return [];
		}
		// NOTE: 1 DOM access here
		const css = window.getComputedStyle(element, null);
		return property ? css[property] : css;
	};

	const entries = (obj) => {
		return Object.keys(obj || {})
			.map(key => ([key, obj[key]]));
	};

	const getPositionSize = (el, prop) => {
		return el === window || el === document ?
			document.documentElement[prop] :
			el[prop];
	};

	const getOffsetHeight = el => {
		return getPositionSize(el, 'offsetHeight');
	};

	const getClientHeight = el => {
		return getPositionSize(el, 'clientHeight');
	};

	const scope = 'ElInfiniteScroll';
	const attributes = {
		delay: {
			type: Number,
			default: 200
		},
		distance: {
			type: Number,
			default: 0
		},
		disabled: {
			type: Boolean,
			default: false
		},
		immediate: {
			type: Boolean,
			default: true
		}
	};

	const getScrollOptions = (el, vm) => {
		if(!isHtmlElement(el)) return {};

		return entries(attributes).reduce((map, [key, option]) => {
			const {
				type,
				default: defaultValue
			} = option;
			let value = el.getAttribute(`infinite-scroll-${key}`);
			value = isUndefined(vm[value]) ? value : vm[value];
			switch(type) {
				case Number:
					value = Number(value);
					value = Number.isNaN(value) ? defaultValue : value;
					break;
				case Boolean:
					value = isDefined(value) ? value === 'false' ? false : Boolean(value) : defaultValue;
					break;
				default:
					value = type(value);
			}
			map[key] = value;
			return map;
		}, {});
	};

	const getElementTop = el => el.getBoundingClientRect().top;

	const handleScroll = function(cb) {
		const {
			el,
			vm,
			container,
			observer
		} = this[scope];
		const {
			distance,
			disabled
		} = getScrollOptions(el, vm);

		if(disabled) return;

		const containerInfo = container.getBoundingClientRect();
		if(!containerInfo.width && !containerInfo.height) return;

		let shouldTrigger = false;

		if(container === el) {
			// be aware of difference between clientHeight & offsetHeight & window.getComputedStyle().height
			//			const scrollBottom = container.scrollTop + getClientHeight(container);
			//			shouldTrigger = container.scrollHeight - scrollBottom <= distance;

			shouldTrigger = container.scrollTop <= distance;
		} else {
			const heightBelowTop = getOffsetHeight(el) + getElementTop(el) - getElementTop(container);
			const offsetHeight = getOffsetHeight(container);
			const borderBottom = Number.parseFloat(getStyleComputedProperty(container, 'borderBottomWidth'));
			shouldTrigger = heightBelowTop - offsetHeight + borderBottom <= distance;
		}

		if(shouldTrigger && isFunction(cb)) {
			cb.call(vm);
		} else if(observer) {
			observer.disconnect();
			this[scope].observer = null;
		}

	};
	/**/
	export default {
		name: 'TestVue',
		data() {
			return {
				count: [],
				thisId: 0,
			}
		},
		directives: {
			DInfiniteScroll: {
				inserted(el, binding, vnode) {
					const cb = binding.value;

					const vm = vnode.context;
					// only include vertical scroll
					const container = getScrollContainer(el, true);
					const {
						delay,
						immediate
					} = getScrollOptions(el, vm);
					const onScroll = throttle(delay, handleScroll.bind(el, cb));

					el[scope] = {
						el,
						vm,
						container,
						onScroll
					};

					if(container) {
						container.addEventListener('scroll', onScroll);

						if(immediate) {
							const observer = el[scope].observer = new MutationObserver(onScroll);
							observer.observe(container, {
								childList: true,
								subtree: true
							});
							onScroll();
						}
					}
				},
				unbind(el) {
					const {
						container,
						onScroll
					} = el[scope];
					if(container) {
						container.removeEventListener('scroll', onScroll);
					}
				}
			},
		},
		components: {},
		methods: {
			load() {
				console.log("load")
				if(this.count.length > 100) {
					return
				}
				this.addItem()
			},
			addItem() {
				let id = this.getId()
				//				this.count.push({
				this.count.unshift({
					value: id,
					key: id
				})
			},
			fun1() {
				this.$refs.swq.style.overflow = "hidden"
			},
			fun2() {
				this.$refs.swq.style.overflow = "auto"
			},
			fun3() {
				let _this = this
				let t1 = this.$refs.ul.getBoundingClientRect().height

				this.count.unshift(1)
				this.count.unshift(2)
				this.count.unshift(3)

				this.$nextTick(function() {
					let t2 = _this.$refs.ul.getBoundingClientRect().height
					this.$refs.swq.scrollTop = this.$refs.swq.scrollTop + (t2 - t1)
				})

			},
			fun4() {
				console.log(this.$refs.ul.getBoundingClientRect().height)
				console.log(this.$refs.swq.scrollTop)
			},
			getId() {
				return Date.now() + "+" + this.thisId++
			},
		},
		created() {
			for(var i = 0; i < 60; i++) {
				this.addItem()
			}
		},
		mounted() {
			this.$refs.swq.scrollTop = this.$refs.ul.getBoundingClientRect().height
		},
	};
</script>

<style type="text/css">
	* {
		outline: 1px solid red;
	}
	
	.swq {
		width: 300px;
		height: 500px;
		float: left;
	}
</style>