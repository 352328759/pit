import React, {
	useState
} from 'react';
import { render } from 'react-dom';
import { Grid, Tag } from 'antd'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import './stylesheets/antd.css';
moment.locale('zh-cn');

const {
	useBreakpoint
} = Grid;

const App = () => {
	return (
		<>
		</>
	);
};

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
		// this.onChange = this.onChange.bind(this)
	}

	render() {
		// const { swq } = this.state
		return (
			<>
			</>
		);
	}
}

function UseBreakpointDemo() {
	const screens = useBreakpoint();
	console.log(Object.entries(screens))
	return (
		<>
			Current break point:{' '}
			{Object.entries(screens)
				.filter(screen => !!screen[1])
				.map(screen => (
					<Tag color="blue" key={screen[0]}>
						{screen[0]}
					</Tag>
				))}
		</>
	);
}

render((< >
	<a href="https://ant.design/components/layout-cn/" target="_blank" >https://ant.design/components/layout-cn/</a>
	<br />
	{/* <App /> */}
	{/* <Bpp /> */}
	<UseBreakpointDemo />
</>), document.getElementById('react-container'));