import React, {
	useState
} from "react";
import { render } from "react-dom";
// import { Provider, connect } from "react-redux";
import { combineReducers, createStore } from "redux";
import { HashRouter } from "react-router-dom";
import PropTypes from 'prop-types';
// import { Button } from "antd";
import { Button, Avatar } from "./myAntd";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import "./stylesheets/antd.css";
moment.locale("zh-cn");

/**
 * 
 */



function learnRedux() {

	//redux

	function reducer(state = 0, action) {
		switch (action.type) {
			case 'INCREMENT':
				return state + 1;
			case 'DECREMENT':
				return state - 1;
			default:
				return state;
		}
	}
	function reducer2(state = 0, action) {
		switch (action.type) {
			case 'case2_1':
				console.log(action.index)
				return state + 1;
			case 'case2_2':
				return state - 1;
			default:
				return state;
		}
	}

	// let store = createStore(reducer);

	// store.subscribe(() =>
	// 	console.log(store.getState())
	// );

	// store.dispatch({ type: 'INCREMENT' });
	// store.dispatch({ type: 'INCREMENT' });
	// store.dispatch({ type: 'DECREMENT' });

	function visibilityFilter(state = 'SHOW_ALL', action) {
		switch (action.type) {
			case 'SET_VISIBILITY_FILTER':
				return action.filter
			default:
				return state
		}
	}

	function todos(state = [], action) {
		switch (action.type) {
			case 'ADD_TODO':
				return [
					...state,
					{
						text: action.text,
						completed: false
					}
				]
			case 'COMPLETE_TODO':
				return state.map((todo, index) => {
					if (index === action.index) {
						return Object.assign({}, todo, {
							completed: true
						})
					}
					return todo
				})
			default:
				return state
		}
	}

	let reducers2 = combineReducers({ reducer2, reducer })
	let reducers = combineReducers({ reducers2, visibilityFilter, todos })
	let store = createStore(reducers)

	// console.log(store.getState())
	// store.dispatch({
	// 	type: 'case2_1',
	// 	index: 1
	// })
	// console.log(store.getState())

	// console.log("%s", reducer)
	// console.log("%s", reducers)
	// console.log(reducer)
	// console.log(reducers)

	//redux end
}
// learnRedux()

const Spp = () => {
	return (
		<div>
			<p><a target="_blank" href="https://ant.design/components/dropdown-cn/">https://ant.design/components/dropdown-cn/</a></p>
			<p><a target="_blank" href="https://www.redux.org.cn/docs/basics/Store.html">https://www.redux.org.cn/docs/basics/Store.html</a></p>
			<p><a target="_blank" href="https://blog.csdn.net/Chris__wang/article/details/97390279?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf">https://blog.csdn.net/Chris__wang/article/details/97390279?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf</a></p>
			<p><a target="_blank" href="https://naotu.baidu.com/file/ebb15bfab65c13e694195623af62899b">百度</a></p>
			<p><a target="_blank" href="https://www.processon.com/diagraming/5c8a240ee4b02ce2e88e8466">processon</a></p>
		</div>
	);
};

const App = () => {
	let refBpp;
	const click1 = str => {
		refBpp.refs.Cpp.onSomething("onSomething")
	}

	return (
		<>
			<Bpp ref={i => refBpp = i}></Bpp>
			<div onClick={click1}>click1</div>
		</>
	);
};



class Bpp extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			// str: "This is an editable text.",
		};
		// this.onChange = this.onChange.bind(this)
		// this.onClick = this.onClick.bind(this)
	}

	onClick() { }
	componentDidMount() { }

	render() {
		return (
			<>
				<Cpp ref="Cpp"></Cpp>
			</>
		);
	}
}

class Cpp extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			swq: "cccc",
		};
		this.onSomething = this.onSomething.bind(this)
	}

	onSomething(params) {
		console.log(params)
	}

	componentDidMount() { }

	render() {
		const { swq } = this.state
		return (
			<>
				Cpp {swq}
			</>
		);
	}
}

const Dpp = () => {
	const [refName, setRefName] = useState(null);
	const [swq, setSwq] = useState("swq");
	const click1 = str => {
		console.log(refName)
	}
	return (
		<>
			<Avatar icon="5t" />
			{/* <Avatar icon={<UserOutlined />} /> */}
			<Button>Default Button</Button>
			{/* <Button type="primary">Primary Button</Button>
			<Button type="dashed">Dashed Button</Button>
			<br />
			<Button type="text">Text Button</Button>
			<Button type="link">Link Button</Button> */}
		</>
	);
};

// 

const ThemeContext = React.createContext('light');
ThemeContext.displayName = 'MyDisplayName';

class Epp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			them: "dark",
		};
		this.onClick = this.onClick.bind(this)
	}
	onClick() {
		// console.log(this.state.them)
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
				<ThemeContext.Provider value={this.state.them}>
					<Toolbar />
				</ThemeContext.Provider>
				<div onClick={this.onClick}>onClick</div>
			</>
		);
	}
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
	const theme = React.useContext(ThemeContext)
	console.log(theme)
	return (
		<div>
			<ThemedButton />
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
				<Button>{this.context}</Button>
				<ThemeContext.Consumer>
					{value => (
						<Button>{value}</Button>
					)}
				</ThemeContext.Consumer>
			</div>
		);
	}
}

ThemedButton.contextType = ThemeContext;

// 

render((
	<>
		{/* <Spp /> */}

		{/* <App /> */}
		{/* <Bpp /> */}
		{/* <Cpp swq={"d"} /> */}
		<Dpp />
		{/* <Epp /> */}
	</>),
	document.getElementById("react-container")
);