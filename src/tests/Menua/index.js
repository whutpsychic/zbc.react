
import React, { Component } from 'react';

import Transition from "react-addons-css-transition-group";

import './sertIn.css';


//二级菜单
class Menu2 extends Component {


	render() {

		const { data,show } = this.props;

		if (show)
			return (
				<Transition
					transitionName="menu-level2"
					transitionAppear={true}
					transitionAppearTimeout={100}
					transitionEnter={true}
					transitionLeave={true}
					transitionEnterTimeout={100}
					transitionLeaveTimeout={100}
				>
					<ul>
						{
							data.map((item, index) => {
								return <li key={index}>{item.text}</li>
							})
						}
					</ul>
				</Transition>
			)

		return (
			<Transition
				transitionName="menu-level2"
				transitionAppear={true}
				transitionAppearTimeout={100}
				transitionEnter={true}
				transitionLeave={true}
				transitionEnterTimeout={100}
				transitionLeaveTimeout={100}
			>
			</Transition>
		)
	}

}

//一级子菜单
class Item extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			showLevel2: false
		}
	}




	render() {

		const { children, kids } = this.props;
		const { showLevel2 } = this.state;

		return (
			<li>
				<label onClick={this.toggle.bind(this)}>{children}</label><span onClick={this.takeup.bind(this)}>xxx</span>
				<Menu2 data={kids} show={showLevel2}></Menu2>
			</li>
		)

	}


	toggle(event) {
		event.preventDefault();

		const { showLevel2 } = this.state;

		if (showLevel2) this.setState({ showLevel2: false })
		else if (!showLevel2) this.setState({ showLevel2: true })
	}

	putout(event) {
		event.preventDefault();
		this.setState({ showLevel2: true })
	}

	takeup(event) {
		event.preventDefault();
		this.setState({ showLevel2: false })
	}

	componentDidMount() {

		setTimeout(() => {
			this.setState({
				showLevel2:true
			})
		}, 300);

		//setTimeout(() => {
		//	this.setState({
		//		showLevel2: false
		//	})
		//}, 100);
	}

	componentWillUnmount() {

		this.setState({
			showLevel2: false
		})
	}

}


class Menu extends Component {

	//designer
	render() {

		const { data } = this.props;

		if (data.length)
			return (
				<Transition
					transitionName="menu-level1"
					transitionAppear={true}
					transitionAppearTimeout={100}
					transitionEnter={true}
					transitionLeave={true}
					transitionEnterTimeout={100}
					transitionLeaveTimeout={100}
				>
					<ul className="menu">
						{
							data.map((item, index) => {
								return (
									<Item key={index} kids={item.children || []} >{item.text}</Item>
								)
							})
						}
					</ul>
				</Transition>
			)

		else {
			return (
				<Transition
					transitionName="menu-level1"
					transitionAppear={true}
					transitionAppearTimeout={100}
					transitionEnter={true}
					transitionLeave={true}
					transitionEnterTimeout={100}
					transitionLeaveTimeout={100}
				>
				</Transition>
			)
		}

	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	//1
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		console.log('componentWillReceiveProps');
	}

	//2
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState)
		console.log('shouldComponentUpdate');

		return true;
	}

	//3
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}

	//4
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}


}

export default Menu;
