import React, {
	useState
} from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import PropTypes from "prop-types";

// redux
import { Provider, connect } from "react-redux";
import { combineReducers, createStore } from "redux";

// antd
// import { Button } from "antd";
// import { HomeOutlined, UserOutlined } from "@ant-design/icons";

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from "antd/es/locale/zh_CN";
// import moment from "moment";
// import "moment/locale/zh-cn";
// import "antd/dist/antd.css";
// import ColumnGroup from "antd/lib/table/ColumnGroup";
// moment.locale("zh-cn");

// 其它
// import _ from "Lodash";
import ComponentApp from "./components/ComponentApp";

// my style
import "./stylesheets/antd.css";

/**
 * 
 */

import { Button, Avatar } from "./myAntd";


// import * as Utils from "../js/Utils/index";
// import { ArgAdd } from "../js/Utils/index";
// console.log(ArgAdd(0.1, 0.2))



const Spp = () => {
	return (
		<div>
			<p><a target="_blank" href="https://ant.design/components/dropdown-cn/">https://ant.design/components/dropdown-cn/</a></p>

			<p><a target="_blank" href="https://www.redux.org.cn/docs/basics/UsageWithReact.html">实现容器组件</a></p>
			<p><a target="_blank" href="https://naotu.baidu.com/file/ebb15bfab65c13e694195623af62899b">百度脑图 - React 状态管理</a></p>
			<p><a target="_blank" href="https://www.processon.com/diagraming/5c8a240ee4b02ce2e88e8466">processon - React 状态管理</a></p>

			<p><a target="_blank" href="https://blog.csdn.net/Chris__wang/article/details/97390279?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf">react-redux使用时利用ref调用子组件方法不可用报错</a></p>

			<p><a target="_blank" href="https://www.cnblogs.com/lanpang9661/p/12611087.html">React.forwardRef</a></p>

			<p><a target="_blank" href=""></a></p>

		</div>
	);
};

const App = () => {
	let refBpp;
	const [refName, setRefName] = useState(101);

	const click1 = (event) => {
		setRefName(refName + 1)
		// console.log(event)

		// refBpp.refs.Cpp.onSomething("onSomething")

		console.log(refBpp)
	}

	return (
		<>
			<div onClick={click1.bind(this, 'add')}>App click1</div>
			<div>{refName}</div>

			<Bpp ref={i => refBpp = i}></Bpp>
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
		this.click1 = this.click1.bind(this)
	}

	click1() { }

	componentDidMount() { }

	render() {
		return (
			<>
				<Cpp ref="Cpp"></Cpp>

				<div onClick={this.click1}>Bpp click1</div>
				<div>Bpp</div>
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
			<div>

				<hr />
				<div>Cpp {swq}</div>
				{this.props.children ? <div>{this.props.children}</div> : null}
			</div>
		);
	}
}

const Dpp = () => {
	const [refName, setRefName] = useState(null);
	const [swq, setSwq] = useState("swq");
	const click1 = str => {
		console.log(refBpp)
		// console.log(refName)
		// debugger
	}
	let refBpp;

	return (
		<>

			{/* <Avatar icon="5t" size="large" /> */}
			{/* <Avatar icon="5t" size="large" ref={i => refBpp = i} /> */}
			{/* <Avatar icon="5t" size={40} /> */}
			{/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={40} /> */}
			{/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" /> */}
			{/* <Avatar gap={25} size={80}>apple</Avatar> */}
			{/* <Avatar.Group maxCount={2}>
				<Avatar>5t</Avatar>
			</Avatar.Group> */}
			{/* <p><a target="_blank" href="https://zh-hans.reactjs.org/docs/react-api.html#createelement">createElement() 也可以是 React 组件 类型</a></p> */}

			{/* <Button type="primary">Primary Button</Button> */}


			{/* <Button onClick={click1}>Default Button</Button> */}
			{/* <Button type="primary">Primary Button</Button>
			<Button type="dashed">Dashed Button</Button>
			<br />
			<Button type="text">Text Button</Button>
			<Button type="link">Link Button</Button> */}
		</>
	);
};

render((
	// <Provider store={store}>
	<React.Fragment>
		<Spp />

		{/* <ComponentApp /> */}

		{/* <App /> */}
		{/* <Bpp /> */}
		{/* <Cpp swq={"d"} /> */}
		{/* <Dpp /> */}
	</React.Fragment>
	// </Provider>
), document.getElementById("react-container"));