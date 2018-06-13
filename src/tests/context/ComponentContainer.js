
import React, { Component } from 'react';

import Provider from './Provider.js';

import Zcomponent from './Zcomponent.js';



class ComponentContainer extends Component {

	state = {
		store: {
			str: "hehe",
			num: 100
		}
	}



	render() {

		const { store } = this.state;

		return (
			<Provider store={store}>
				<div>
					<p onClick={this.clickP.bind(this)}>Container 点击我以改变hehe的值</p>
					<Zcomponent />
				</div>
			</Provider>
		)
	}

	clickP() {

		let str = Math.random().toFixed(2).toString();

		const _store = this.state.store;

		console.log("clickP")

		this.setState({
			store: { ..._store, str}
		})
	}







}



export default ComponentContainer;