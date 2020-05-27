import { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import '../../stylesheets/Color.css'

class Color extends Component {

	componentWillMount() {
		console.log("componentWillMount")
		this.style = { backgroundColor: "#CCC" }
	}

	shouldComponentUpdate(nextProps) {
		console.log("shouldComponentUpdate")
		const { rating } = this.props
		return rating !== nextProps.rating
	}

	componentWillUpdate(nextProps) {
		console.log("componentWillUpdate")
		const { title, rating } = this.props
		this.style = null
		this.refs.title.style.backgroundColor = "red"
		this.refs.title.style.color = "white"
		console.log(`${title}: rating ${rating} -> ${nextProps.rating}`)
	}

	componentDidUpdate(prevProps) {
		console.log("componentDidUpdate")
		const { title, rating } = this.props
		const status = (rating > prevProps.rating) ? 'better' : 'worse'
		console.log(`${title} is getting ${status}`)
		this.refs.title.style.backgroundColor = ""
		this.refs.title.style.color = "black"
	}

	render() {
		console.log("render")
		const { title, color, rating, onRemove, onRate } = this.props
		return (
			<section className="color" style={this.style}>
				<h1 ref="title">{title}</h1>
				<button onClick={onRemove}>X</button>
				<div className="color"
					style={{ backgroundColor: color }}>
				</div>
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
