var arrs = [1, 2, 3, 5654, 54, 56541, 541654, 56]
var HelloComponent = React.createClass({
	render: function() {
		return <div>
		{
			arrs.map(function  (item) {
				return <div key={item}>{item}</div>
			})
		}
		</div>
	}
});

ReactDOM.render(
	<HelloComponent></HelloComponent>,
	document.getElementById('reactContainer')
)