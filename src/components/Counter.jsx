import React, { Component } from 'react';


class Counter extends Component {
	constructor(props) {
		super()
		this.state = {
			value: 0
		}
		this.update = this.update.bind(this);
	}

	update() {
		this.setState({value: this.state.value += 1})
	}

	render() {
		let val = this.state.value
		return (
			<div>
			<div>{val}</div>
			<button onClick={this.update}>Click Me!</button>
			</div>
			)
	}
}

export default Counter;