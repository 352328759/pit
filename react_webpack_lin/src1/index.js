import React, { useState } from 'react';
import { render } from 'react-dom';
import { Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import './stylesheets/antd.css';
moment.locale('zh-cn');

const { Paragraph, Text } = Typography;

const App = () => {
	return (
		<>
			<Paragraph ellipsis>
				Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
				Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
				a design language for background applications, is refined by Ant UED Team. Ant Design, a
				design language for background applications, is refined by Ant UED Team. Ant Design, a design
				language for background applications, is refined by Ant UED Team. Ant Design, a design
				language for background applications, is refined by Ant UED Team.
			</Paragraph>

			<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
				Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
				Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
				a design language for background applications, is refined by Ant UED Team. Ant Design, a
				design language for background applications, is refined by Ant UED Team. Ant Design, a design
				language for background applications, is refined by Ant UED Team. Ant Design, a design
				language for background applications, is refined by Ant UED Team.
			</Paragraph>
		</>
	);
};

class Cpp extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			swq: "据贵州省气象台预报，受台风“海高斯”北部倒槽影响，未来两天贵州省有阵雨或雷雨天气。黔南、黔西南、黔东南等贵州省的南部地区有大雨或暴雨，个别乡镇有大暴雨。",
		};
		// this.onChange = this.onChange.bind(this)
	}

	render() {
		const { swq } = this.state
		return (
			<>
				<Text>{swq}</Text><br />
				<Text code>{swq}</Text><br />
				<Text copyable>{swq}</Text><br />
				<Text disabled>{swq}</Text><br />
				<Text editable>{swq}</Text><br />
			</>
		);
	}
}

class ButtonSize extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			str: 'This is an editable text.',
		};
		this.onChange = this.onChange.bind(this)
	}

	onChange(str) {
		console.log('Content change:', str);
		this.setState({ str });
	};

	render() {
		return (
			<>
				<Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>
				<Paragraph copyable>This is a copyable text.</Paragraph>
				<Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
				<Paragraph copyable={{ icon: <SmileOutlined /> }}>Custom icon.</Paragraph>
				<Paragraph copyable={{ tooltips: ['click here', 'you clicked!!'] }}>Replace tooltips text.</Paragraph>
			</>
		);
	}
}




render((<>
	<a href="https://ant.design/components/typography-cn/" target="_blank">https://ant.design/components/typography-cn/</a>
	<br />
	{/* <App /> */}
	<Cpp />
</>), document.getElementById('react-container'));