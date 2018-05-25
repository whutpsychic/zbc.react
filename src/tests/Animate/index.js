
import React, { Component } from 'react';

import Transition from "react-addons-css-transition-group";

import './animateCss/sertIn.css';

class Animate extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			show: true,
			txt:"shjkshjkhsjkshjkshkjlshkjshs"
		}
	}

	//designer
	render() {

		const { show, txt } = this.state;

		if (show)
			return (
				<Transition
					transitionName="sertIn"
					transitionAppear={true}
					transitionAppearTimeout={2000}
					//transitionEnter={true}
					//transitionLeave={true}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					<p className="pp">{txt}</p>
				</Transition>
			)

		return (
			<Transition
				transitionName="sertIn"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>
			</Transition>
			)
	}


	componentDidMount() {

		//
		setTimeout(() => {
			this.setState({
				show:false
			})
		}, 5000);

		setTimeout(() => {
			this.setState({
				show: true
			})
		}, 8000);



	}


}

export default Animate;
