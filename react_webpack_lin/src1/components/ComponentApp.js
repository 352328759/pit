import React from "react";

// 创建一个 上下文(Context) 对象
// "light" 是默认值, 子组件不在 xxx.Provider 时生效的值
// 父子组件一般存在不同的文件中, 把这行代码抽象到一个独立文件, 再在用到的文件中 import 进来
const ThemeContext = React.createContext("light");

// 设置别名, 在开发者工具[react developer tools]中, 以别名显示
ThemeContext.displayName = "MyDisplayName";

class ComponentApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			them: "dark",
		};
		this.onClick = this.onClick.bind(this)
	}
	onClick() {
		console.log("在 App 更新了数据")
		this.setState({
			them: this.state.them == "light" ? "dark" : "light"
		})
	}
	render() {
		// 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
		// 无论多深，任何组件都能读取这个值。
		// 在这个例子中，我们将 “dark” 作为当前的值传递下去。
		return (
			<>
				<div>&lt;ThemeContext.Provider&gt; 的 value 传入上下文共用的数据</div>
				<div>被 &lt;ThemeContext.Provider&gt; 包含的子组件, 数据不用逐层传递也可以共用</div>
				<ThemeContext.Provider value={this.state.them}>
					<Toolbar />
				</ThemeContext.Provider>
				<div onClick={this.onClick}>点击这里</div>
			</>
		);
	}
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
	// 无状态函数式组件中, 可以用 useContext 调用上下文
	const theme = React.useContext(ThemeContext)
	console.log(theme)
	return (
		<div>
			<ThemedButton />
			{/* Consumer 调用上下文 */}
			<div>Context.Consumer 中的 value 即 Context.Provider 传入的 value</div>
			<ThemeContext.Consumer>
				{value => (
					<div>{value}</div>
				)}
			</ThemeContext.Consumer>
		</div>
	);
}
// Toolbar.contextType = ThemeContext;

class ThemedButton extends React.Component {
	// 指定 contextType 读取当前的 theme context。
	// React 会往上找到最近的 theme Provider，然后使用它的值。
	// 在这个例子中，当前的 theme 值为 “dark”。
	render() {
		return (
			<div>
				<button>{this.context}</button>
				<ThemeContext.Consumer>
					{value => (
						<button>{value}</button>
					)}
				</ThemeContext.Consumer>
			</div>
		);
	}
}
// 必须指定 contextType 才能使用 Context.Consumer
ThemedButton.contextType = ThemeContext;

export default ComponentApp

// 根组件调用 ComponentApp 的 demo 就不另外写了
// import ComponentApp from "./components/ComponentApp";
// render((
// 	<ComponentApp />
// ), document.getElementById("react-container"));
