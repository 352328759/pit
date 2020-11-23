import React from "react";

import { Provider, connect } from "react-redux";
import { combineReducers, createStore } from "redux";

function val1_1(state = 0, action) {
	switch (action.type) {
		case "val1_1__INCREMENT":
			return state + 1;
		case "val1_1__DECREMENT":
			return state - 1;
		default:
			return state;
	}
}
function val1_2(state = 0, action) {
	switch (action.type) {
		case "val1_2__INCREMENT":
			return state + 1;
		case "val1_2__DECREMENT":
			return state - 1;
		default:
			return state;
	}
}

function val2(state = "初始值", action) {
	switch (action.type) {
		case "val2__RESET":
			return action.state
		default:
			return state
	}
}

function val3(state = [], action) {
	switch (action.type) {
		case "val3__ADD_TODO":
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case "val3__COMPLETE_TODO":
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

let val1 = combineReducers({ val1_1, val1_2 })
let reducers = combineReducers({ val1, val2, val3 })
var store = createStore(reducers)
store.subscribe(() => {
	console.log(store.getState())
});


// 展示组件
// connect 没有传入 mapDispatchToProps 将会在 this.props 里得到 dispatch
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			thisState: "this.state",
		};
		// props.dispatch
	}

	componentDidMount() { }

	render() {
		const { thisState } = this.state

		// 方法和变量都从 this.props 传入
		const {
			val1,
			val1_1,
			val1_2,
			val2,
			val3,
			val1_1__INCREMENT,
			val1_2__INCREMENT,
			val2__RESET,
			val3__ADD_TODO
		} = this.props

		return (
			<div>
				<div onClick={val1_1__INCREMENT}>val1.val1_1: {val1.val1_1}</div>
				<div>val1_1: {val1_1}</div>
				<div onClick={val1_2__INCREMENT}>val1.val1_2: {val1.val1_2}</div>
				<div>val1_2: {val1_2}</div>
				<div onClick={val2__RESET.bind(this, "新值")}>val2: {val2}</div>
				<div onClick={val3__ADD_TODO}>新增 val3</div>

				{
					val3.map((item, index) => {
						return <div key={index}>{item.text}</div>
					})
				}

				<hr />
				<div>本地数据: {thisState}</div>
				{this.props.children ? <div>{this.props.children}</div> : null}
			</div>
		);
	}
}

// 声明变量
function mapStateToProps(state, ownProps) {
	// ownProps: 传给对应展示组件的原本的 props
	// state === store.getState() // true
	return {
		val1: state.val1,
		val1_1: state.val1.val1_1,
		val1_2: state.val1.val1_2,
		val2: state.val2,
		val3: state.val3,
	}
}

// 声明方法
function mapDispatchToProps(dispatch, ownProps) {
	// ownProps: 传给对应展示组件的原本的 props
	return {
		val1_1__INCREMENT: () => {
			dispatch({
				type: "val1_1__INCREMENT",
			})
		},
		val1_2__INCREMENT: () => {
			dispatch({
				type: "val1_2__INCREMENT",
			})
		},
		val2__RESET: (state) => {
			dispatch({
				type: "val2__RESET",
				state: state
			})
		},
		val3__ADD_TODO: () => {
			dispatch({
				type: "val3__ADD_TODO",
				text: "text"
			})
		},
	}
}
// 对应展示组件最后收到的 props ≈ ownProps + mapStateToProps.return + mapDispatchToProps.return
// mapDispatchToProps 为空的时候, props 会有 dispatch

// 其它组件
// 没有传入 (mapStateToProps, mapDispatchToProps) 称为其它组件
// connect 没有传入 mapDispatchToProps 将会得到 dispatch
const Bpp = (...rest) => {
	let dispatch = rest[0].dispatch
	return (
		<div>
			<div onClick={e => dispatch({ type: "val1_2__INCREMENT" })}>从其它组件修改 val1_2</div>
		</div>
	);
};

// 容器组件
const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App)
const ConnectBpp = connect()(Bpp)

const ProviderApp = () => {
	return (
		<Provider store={store}>
			<ConnectApp>
				子组件
				<ConnectBpp></ConnectBpp>
			</ConnectApp>
		</Provider>
	);
};

export default ProviderApp