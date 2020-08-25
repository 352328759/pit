import React, {
	useState
} from 'react';
import { render } from 'react-dom';
import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import './stylesheets/antd.css';
moment.locale('zh-cn');



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
				<Space>
					Space
					<Button type="primary">Button</Button>
					<Upload>
						<Button><UploadOutlined /> Click to Upload</Button>
					</Upload>
					<Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
						<Button>Confirm</Button>
					</Popconfirm>
				</Space>
			</>
		);
	}
}



render((
	<>
		<a href="https://ant.design/components/space-cn/" target="_blank" >https://ant.design/components/space-cn/</a>
		<br />
		{/* <App /> */}
		{/* <Bpp /> */}
		<Cpp />
	</>),
	document.getElementById('react-container'));