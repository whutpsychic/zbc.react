
import React, { Component } from 'react';

//import { Animate } from './tests';
import { Date} from './tests/Antd';

import Menu from './tests/Menua';

class App extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			menuData :[
				{ name: "xxxx", text: "menu1" },
				{ name: "qqqq", text: "menu2" },
				{
					name: "wwww", text: "menu3", children: [
						{ name: "aaaa", text: "menu3-1" },
						{ name: "ssss", text: "menu3-2" },
					]
				},
				{
					name: "eeee", text: "menu4", children: [
						{ name: "aaaa", text: "menu4-1" },
						{ name: "ssss", text: "menu4-2" },
					]
				}
			]
		}
	}





	//designer
	render() {

		const { menuData } = this.state;

		return (
			<div>
				<Menu data={menuData} />
				<Date />
			</div>
		)
	}


	componentWillMount() {
		console.log('componentWillMount');
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		console.log('componentWillReceiveProps');
	}

	//1
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState)
		console.log('shouldComponentUpdate');

		return true;
	}

	//2
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentDidMount() {
		console.log('componentDidMount');
		setTimeout(() => {
			this.setState({
				menuData: [
					{ name: "xxxx", text: "menu1" },
					{ name: "qqqq", text: "menu2" },
					{
						name: "wwww", text: "menu3", children: [
							{ name: "aaaa", text: "menu3-1" },
							{ name: "ssss", text: "menu3-2" },
						]
					}
				]
			})
		}, 1000);
	}


}

export default App;
