import React from "react";

class Bpp extends React.Component {
	render() {
		return (
			<div>{this.props.children}</div>
		);
	}
};

const Cpp = React.forwardRef((props, ref) => {
	const click1 = (event) => {
		console.log(ref)
	}

	return (
		<div>
			<button onClick={click1}>Cpp 中获取 refComponent_Cpp</button>

			<div>Cpp 是由 React.forwardRef() 创建的组件, 本组件接受一个 ref 参数, 并传给本组件下的另一个组件</div>
			<div ref={ref}>这是接受 ref 的组件, 可以在上级组件中被获取</div>
		</div>
	);
});

const ComponentApp = () => {
	let refElement;
	let refElement2 = React.createRef();
	let refComponent;
	let refComponent2 = React.createRef();

	let refComponent_Cpp = React.createRef();

	const click1 = (event) => {
		console.log(refElement)
		console.log(refElement2)
		console.log(refComponent)
		console.log(refComponent2)
	}

	const click2 = (event) => {
		console.log(refComponent_Cpp)
	}

	return (
		<div>
			<button onClick={click1}>函数组件中使用 React.createRef()</button>

			<div ref={i => refElement = i}>DOM 上用箭头函数设置 ref, 获得 DOM 本身</div>
			<div ref={refElement2}>DOM 上用 React.createRef() 设置 ref, 获得一个对象, 对象的 current 指向 DOM 本身</div>

			<Bpp ref={i => refComponent = i}>class 组件上用箭头函数设置 ref, 获得组件的挂载实例</Bpp>
			<Bpp ref={refComponent2}>class 组件上用 React.createRef() 设置 ref, 获得一个对象, 对象的 current 指向组件的挂载实例</Bpp>

			<hr />

			<button onClick={click2}>App 中获取 refComponent_Cpp</button>

			<Cpp ref={refComponent_Cpp}></Cpp>
		</div>
	);
};

export default ComponentApp

// 根组件调用 ComponentApp 的 demo 就不另外写了
// import ComponentApp from "./components/ComponentApp";
// render((
// 	<ComponentApp />
// ), document.getElementById("react-container"));