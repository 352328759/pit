import React, {
	useState
} from 'react';
import { render } from 'react-dom';
import { Affix, Button } from 'antd';



// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import './stylesheets/antd.css';
moment.locale('zh-cn');


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

// class Dpp extends React.Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			// str: 'This is an editable text.',
// 		};
// 		// this.click1 = this.click1.bind(this)
// 	}

// 	// click1(str) { };

// 	render() {
// 		return (
// 			<>
// 			</>
// 		);
// 	}
// }

class Bpp extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			// str: 'This is an editable text.',
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

class NAME extends React.Component {
	constructor(props) {/* *** */ }
	FunctionA() {/* 调用的方法 */ }
	render() {/* *** */ }
}

render((
	<>
		<a href="https://ant.design/components/breadcrumb-cn/" target="_blank" >https://ant.design/components/breadcrumb-cn/</a>
		<br />
		{/* <App /> */}
		{/* <Bpp /> */}
		{/* <Cpp /> */}
		<Dpp />
	</>),
	document.getElementById('react-container')
);