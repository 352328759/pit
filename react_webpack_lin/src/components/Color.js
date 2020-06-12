import { Component } from "react"
import PropTypes from "prop-types"
import StarRating from "./StarRating"
import getLifecycle from "@/utils/getLifecycle.js"
import "../../stylesheets/Color.css"

class Color extends Component {

	constructor() {
		super()
		getLifecycle("Color", "constructor")
	}

	componentWillMount() {
		getLifecycle("Color", "componentWillMount")
		this.style = { backgroundColor: "#CCC" }
	}

	componentDidMount() {
		getLifecycle("Color", "componentDidMount")
	}

	componentWillUnmount() {
		getLifecycle("Color", "componentWillUnmount")
	}

	componentWillReceiveProps() {
		getLifecycle("Color", "componentWillReceiveProps")
	}

	shouldComponentUpdate(nextProps) {
		getLifecycle("Color", "shouldComponentUpdate")
		const { rating } = this.props
		if (rating !== nextProps.rating) {
			console.log("当其属性值没有发生变化时阻止程序更新这些颜色")
			return true
		} else {
			return false
		}
		// return rating !== nextProps.rating
	}

	componentWillUpdate(nextProps) {
		getLifecycle("Color", "componentWillUpdate")
		const { title, rating } = this.props
		this.style = null
		this.refs.title.style.backgroundColor = "red"
		this.refs.title.style.color = "white"
		console.log(`${title}: rating ${rating} -> ${nextProps.rating}`)
	}

	componentDidUpdate(prevProps) {
		getLifecycle("Color", "componentDidUpdate")
		const { title, rating } = this.props
		const status = (rating > prevProps.rating) ? "better" : "worse"
		console.log(`${title} is getting ${status}`)
		this.refs.title.style.backgroundColor = ""
		this.refs.title.style.color = "black"
	}

	render() {
		getLifecycle("Color", "render")
		const { title, color, rating, onRemove, onRate } = this.props
		return (
			<section className="color" style={this.style}>
				<h1 ref="title">{title}</h1>
				<button onClick={onRemove}>X</button>
				<div className="color" style={{ backgroundColor: color }}></div>
				<div>
					<StarRating starsSelected={rating} onRate={onRate} />
				</div>
			</section>
		)
	}
}

Color.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	rating: PropTypes.number,
	onRemove: PropTypes.func,
	onRate: PropTypes.func
}

Color.defaultProps = {
	rating: 0,
	onRemove: f => f,
	onRate: f => f
}

export default Color
