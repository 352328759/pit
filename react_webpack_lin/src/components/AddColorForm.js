import { Component } from "react"
import PropTypes from "prop-types"
import getLifecycle from "@/utils/getLifecycle.js"
import "../../stylesheets/AddColorForm.css"

const AddColorForm2 = ({ onNewColor = f => f }) => {

	let _title, _color

	const submit = e => {
		e.preventDefault()
		onNewColor(_title.value, _color.value)
		_title.value = ""
		_color.value = "#000000"
		_title.focus()
	}

	return (
		<form className="add-color" onSubmit={submit}>
			<input ref={input => _title = input}
				type="text"
				placeholder="color title..." required />
			<input ref={input => _color = input}
				type="color" required />
			<button>ADD</button>
		</form>
	)
}

class AddColorForm extends Component {

	constructor(props) {
		super(props)
		getLifecycle("AddColorForm", "constructor")
		this.state = {
			swq: props.swq,
		}
		// this.addColor = this.addColor.bind(this)
		// this.rateColor = this.rateColor.bind(this)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
		e.preventDefault()
		console.log(this)
		this.props.onNewColor(this.refs._title.value, this.refs._color.value)
		this.refs._title.value = ""
		this.refs._color.value = "#000000"
		this.refs._title.focus()
	}

	componentWillReceiveProps(nextProps) {
		getLifecycle("AddColorForm", "componentWillReceiveProps")
		this.setState({ swq: nextProps.swq })
	}

	componentWillUpdate() {
		getLifecycle("AddColorForm", "componentWillUpdate")
	}

	render() {
		getLifecycle("AddColorForm", "render")
		var {
			swq
		} = this.state
		return (
			<div>
				<div>{swq}</div>
				<form className="add-color" onSubmit={this.submit}>
					<input ref="_title"
						type="text"
						placeholder="color title..." required />
					<input ref="_color"
						type="color" required />
					<button>ADD</button>
				</form>
			</div>
		)
	}

}

AddColorForm.propTypes = {
	onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
	onNewColor: f => f
}

export default AddColorForm
