export default function getLifecycle(componentName, cycle) {

	function consoleMsg(groupTitle, msg) {
		console.groupCollapsed(componentName + ": " + groupTitle + ": " + cycle)
		msg.forEach(function (params) {
			console.log(params)
		})
		console.groupEnd();
	}

	if (typeof cycle === "string") {
		switch (cycle) {
			case "constructor":
				consoleMsg("挂载周期 - 1", [
					"挂载生命周期 - 初始化组件",
					"类构造函数"
				])
				break;
			case "componentWillMount":
				consoleMsg("挂载周期 - 2", [
					"挂载生命周期 - 组件将要挂载",
					"同步 setState 触发一次 render; 且不涉及更新周期",
					"异步 setState 多次触发 render; 涉及更新周期"
				])
				break;
			case "componentDidMount":
				consoleMsg("挂载周期 - 4", [
					"挂载生命周期 - 组件挂载完成"
				])
				break;
			case "componentWillUnmount":
				consoleMsg("挂载周期 - 5", [
					"挂载生命周期 - 组件将要销毁",
					"匹配 ReactDOM.unmountComponentAtNode 使用",
					"组件从 if-true 变成 if-false 也会触发卸载"
				])
				break;
			case "shouldComponentUpdate":
				consoleMsg("更新周期 - 1", [
					"更新生命周期 - 是否要更新数据",
					"限制更新",
					"return true 更新; false 阻拦; 不return 报错",
					"nextProps 父组件传给子组件的值",
					"nextState 数据更新之后值"
				])
				break;
			case "componentWillReceiveProps":
				consoleMsg("更新周期 - 2", [
					"更新生命周期 - 组件将拿到props",
					"父组件中改变了props传值",
					"更新生命周期中唯一可以调用setState方法的地方, 在属性被父组件修改时被触发",
					"nextProps 父组件传给子组件的值",
					"更新周期不一定有这个环节, 只有 props 改变了才会触发"
				])
				break;
			case "componentWillUpdate":
				consoleMsg("更新周期 - 3", [
					"更新生命周期 - 将要更新数据"
				])
				break;
			case "componentDidUpdate":
				consoleMsg("更新周期 - 5", [
					"更新生命周期 - 数据更新完成"
				])
				break;
			case "render":
				consoleMsg("挂载周期 - 3; 更新周期 - 4", [
					"挂载生命周期 - 渲染组件",
					"更新生命周期 - 重绘组件"
				])
				break;
			default:
				break;
		}
	} else {
	}



	// console.log(componentName + ": " + cycle)
}