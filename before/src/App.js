
import React, { Component } from 'react';

//import { Animate } from './tests';
//import ComponentContainer from './tests/context';
import { TodoList } from './tests/ToDos';


class App extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			list: [
				{ id: 'id1', text: "text1", complete: false },
				{ id: 'id2', text: "text2", complete: false },
				{ id: 'id3', text: "text3", complete: false },
				{ id: 'id4', text: "text4", complete: false },
				{ id: 'id5', text: "text5", complete: false },
				{ id: 'id6', text: "text6", complete: false },
				{ id: 'id7', text: "text7", complete: false }
			]
		}

	}


	//designer
	render() {



		return (
			<div>
				<TodoList list={this.state.list}/>
			</div>
		)
	}


	componentWillMount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	//1
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	//2
	componentWillUpdate() {
	}

	componentDidUpdate() {
	}

	componentDidMount() {

		setTimeout(() => {

			console.log(2)
			this.setState({
				list: [
					{ id: 'id1', text: "text1", complete: false },
					{ id: 'id2', text: "text22", complete: false },
					{ id: 'id7', text: "text73", complete: false }
				]
			})
		},3000)







	}


}

export default App;
