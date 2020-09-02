import React, {
	useState
} from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { HashRouter } from "react-router-dom";
import { Affix, Button } from "antd";

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import "./stylesheets/antd.css";
moment.locale("zh-cn");



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

// let reducer2 = combineReducers({ visibilityFilter, todos })
let reducer2 = combineReducers({ visibilityFilter })
// let store2 = createStore(reducer2)


console.log("%s", reducer)
console.log("%s", reducer2)
// console.log(reducer)
// console.log(reducer2)


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
	}

	// onChange(str) {};

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
			// swq: "",
		};
		this.onSomething = this.onSomething.bind(this)
	}

	onSomething(params) {
		console.log(params)
	}

	render() {
		// const { swq } = this.state
		return (
			<>
				Cpp
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
			<div ref={setRefName}>
				目标节点
			</div>
			<div onClick={click1}>click1</div>
		</>
	);
};

/* class Dpp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// str: "This is an editable text.",
		};
		// this.click1 = this.click1.bind(this)
	}
	// click1(str) { };
	render() {
		return (
			<>
			</>
		);
	}
} */

render((
	<>
		<p><a target="_blank" href="https://ant.design/components/breadcrumb-cn/">https://ant.design/components/breadcrumb-cn/</a></p>
		<p><a target="_blank" href="https://www.redux.org.cn/docs/introduction/ThreePrinciples.html">https://www.redux.org.cn/docs/introduction/ThreePrinciples.html</a></p>
		<p><a target="_blank" href="https://blog.csdn.net/Chris__wang/article/details/97390279?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf">https://blog.csdn.net/Chris__wang/article/details/97390279?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf</a></p>
		<br />
		{/* <App /> */}
		{/* <Bpp /> */}
		{/* <Cpp /> */}
		<Dpp />
	</>),
	document.getElementById("react-container")
);