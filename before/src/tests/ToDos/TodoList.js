
import React, { Component } from 'react';


import TodoItem from './TodoItem.js';

class TodoList extends Component {



	render() {

		let { list } = this.props;

		return (
			<ul>
				{
					list.map((item, index) => {
						return <TodoItem key={index} data={item}/>
					})
				}
			</ul>
			)
	}

	componentWillMount() {


	}

	componentWillReceiveProps() {

	}

}


export default TodoList;