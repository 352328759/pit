var name = 'Josh Perez';

class Game extends React.Component {

	render() {
		return (<a href="https://react.docschina.org/docs/conditional-rendering.html">Hello, {name} {this.props.swq}</a>)
	}
}


// ========================================

ReactDOM.render(
	<Game swq={"s"}></Game>,
	document.getElementById('root')
)