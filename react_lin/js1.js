function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
			<a href="https://react.docschina.org/docs/thinking-in-react.html">第四步：确定 state 放置的位置</a>
		</div>
	);
}

function WelcomeDialog() {
	return (
		<FancyBorder color="blue">0
			<h1 className="Dialog-title">
				Welcome
		</h1>
			<p className="Dialog-message">
				Thank you for visiting our spacecraft!
		</p>
		</FancyBorder>
	);
}

ReactDOM.render(
	<WelcomeDialog></WelcomeDialog>,
	document.getElementById('root')
);