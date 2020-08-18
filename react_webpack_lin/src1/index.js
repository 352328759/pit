import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
// import './index.css';
moment.locale('zh-cn');



const App = () => {
	return (
		<>
			<Button type="primary">Primary</Button>
			<Button type="primary" disabled>Primary(disabled)</Button>
			<br />
			<Button>Default</Button>
			<Button disabled>Default(disabled)</Button>
			<br />
			<Button type="dashed">Dashed</Button>
			<Button type="dashed" disabled>Dashed(disabled)</Button>
			<br />
			<Button type="text">Text</Button>
			<Button type="text" disabled>Text(disabled)</Button>
			<br />
			<Button type="link">Link</Button>
			<Button type="link" disabled>Link(disabled)</Button>
			<br />
			<Button danger>Danger Default</Button>
			<Button danger disabled>Danger Default(disabled)</Button>
			<br />
			<Button danger type="text">Danger Text</Button>
			<Button danger type="text" disabled>Danger Text(disabled)</Button>
			<br />
			<Button type="link" danger>Danger Link</Button>
			<Button type="link" danger disabled>Danger Link(disabled)</Button>
			<div className="site-button-ghost-wrapper">
				<Button ghost>Ghost</Button>
				<Button ghost disabled>Ghost(disabled)</Button>
			</div>
		</>
	);
};





class ButtonSize extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			size: 'default',
		};
		this.handleSizeChange = this.handleSizeChange.bind(this)
	}

	handleSizeChange(e) {
		this.setState({ size: e.target.value });
	};

	render() {
		const { size } = this.state;
		return (
			<></>
		);
	}
}



render((<>
	<a href="https://ant.design/components/button-cn/">https://ant.design/components/button-cn/</a>
	<br />
	<App />
</>), document.getElementById('react-container'));