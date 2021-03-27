import React from "react";

// 创建一个 上下文(Context) 对象
// "light" 是默认值, 子组件不在 xxx.Provider 时生效的值
// 父子组件一般存在不同的文件中, 把这行代码抽象到一个独立文件, 再在用到的文件中 import 进来
const ContextName = React.createContext("light");

// 设置别名, 在开发者工具[react developer tools]中, 以别名显示
ContextName.displayName = "MyDisplayName";

class ComponentApp extends React.Component {
	constructor(props) {
		super(props)
		var _this = this
		// this.onClick = this.onClick.bind(this)
		this.onClick = function () {
			console.log("在 App 更新了数据")
			const rootData = _this.state.rootData
			rootData.them = _this.state.rootData.them == "light" ? "dark" : "light"
			_this.setState({ rootData })
		};
		this.state = {
			rootData: {
				them: "dark",
				changeTheme: this.onClick
			},
		};
	}
	render() {
		// 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
		// 无论多深，任何组件都能读取这个值。
		// 在这个例子中，我们将 “dark” 作为当前的值传递下去。
		return (
			<>
				<div> ContextName.Provider 的 value 传入上下文共用的数据</div>
				<div>被 ContextName.Provider 包含的子组件, 数据不用逐层传递也可以共用</div>
				{/* <ContextName.Provider> 的 value 传入上下文共用的数据 */}
				{/* 被 <ContextName.Provider> 包含的子组件, 数据不用逐层传递也可以共用 */}
				<ContextName.Provider value={this.state.rootData}>
					<ComA />
				</ContextName.Provider>
				<button onClick={this.onClick}>点击这里在父组件修改值</button>
			</>
		);
	}
}

// 中间的组件再也不必指明往下传递 theme 了。
function ComA(props) {
	// 无状态函数式组件中, 可以用 useContext 调用上下文
	const rootData = React.useContext(ContextName)
	// 如果不是在 xxx.Provider 里调用的话, 这里就会取到 createContext 时的默认值
	console.log(rootData.them)
	return (
		<div>
			<div>这是 ComA 里的 React.useContext 调用: {rootData.them}</div>
			{/* Consumer 调用上下文 */}
			<div>xxx.Consumer 中的 value 即 Context.Provider 传入的 value</div>
			<ContextName.Consumer>
				{value => (
					<div>这是 ComA 里的 xxx.Consumer 调用: {value.them}</div>
				)}
			</ContextName.Consumer>
			<ComB />
		</div>
	);
}
// ComA.contextType = ContextName;

class ComB extends React.Component {
	// 指定 contextType 读取当前的 ContextName。
	// React 会往上找到最近的 xxx.Provider，然后使用它的值。
	render() {
		return (
			<div>
				{/* this.context 的 context 是关键字 */}
				<div>这是 ComB 里的 contextType 调用:{this.context.them}</div>
				<ContextName.Consumer>
					{value => {
						console.log(value)
						return (
							<>
								<div>这是 ComB 里的 xxx.Consumer 调用:{value.them}</div>
								<button onClick={value.changeTheme}>点击这里在子组件修改值</button>
							</>
						)
					}}
				</ContextName.Consumer>
			</div>
		);
	}
}
// 必须指定 contextType 才能使用 this.context
ComB.contextType = ContextName;

export default ComponentApp

// 根组件调用 ComponentApp 的 demo 就不另外写了
// import ComponentApp from "./components/ComponentApp";
// render((
// 	<ComponentApp />
// ), document.getElementById("react-container"));
