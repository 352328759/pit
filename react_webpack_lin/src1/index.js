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
import ProviderApp from "./components/ProviderApp";

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
			<p><a target="_blank" href="https://blog.csdn.net/Chris__wang/article/details/97390279?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf">https://blog.csdn.net/Chris__wang/article/details/97390279?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf</a></p>
			<p><a target="_blank" href="https://naotu.baidu.com/file/ebb15bfab65c13e694195623af62899b">百度</a></p>
			<p><a target="_blank" href="https://www.processon.com/diagraming/5c8a240ee4b02ce2e88e8466">processon</a></p>
			<p><a target="_blank" href="https://www.cnblogs.com/lanpang9661/p/12611087.html">React.forwardRef</a></p>

			<p><a target="_blank" href="https://www.cnblogs.com/sanhuamao/p/13773556.html">https://www.cnblogs.com/sanhuamao/p/13773556.html</a></p>
			<p><a target="_blank" href=""></a></p>

		</div>
	);
};

const App = () => {
	let refBpp;
	const [refName, setRefName] = useState(101);

	const click1 = (event) => {
		setRefName(refName + 1)
		console.log(event)
	}

	return (
		<div>
			<div onClick={click1.bind(this, 'add')}>click1</div>
			<div>{refName}</div>
		</div>
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
		// this.onSomething = this.onSomething.bind(this)
	}

	// onSomething(params) { }

	componentDidMount() { }

	render() {
		const { swq } = this.state

		console.log(this)
		console.log(this.props)

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
	<>
		{/* <Spp /> */}

		{/* <App /> */}
		{/* <Bpp /> */}

		{/* <Cpp swq={"d"} /> */}
		<ProviderApp />

		{/* <Dpp /> */}
	</>
	// </Provider>
), document.getElementById("react-container"));