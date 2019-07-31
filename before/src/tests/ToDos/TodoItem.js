
import React, { Component } from 'react';


class TodoItem extends Component {


	render() {

		const { data } = this.props;

		return <li>{data.text}</li>
	}

	componentWillMount() {

	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps.data.text);
		console.log(this.props.data.text);
		return nextProps.data.text !== this.props.data.text;
	}

	componentWillReceiveProps() {
		console.log("item will receive props");
	}

	componentDidUpdate() {
		console.log("updated!");
	}

}

export default TodoItem;