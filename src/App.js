
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


	componentDidMount() {

		//
		//setTimeout(() => {
		//	console.log("hell");


		//	this.setState({
		//		menuData:[]
		//	})
		//},3000)
	}


}

export default App;
