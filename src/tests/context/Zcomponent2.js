
import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

class Zcomponent2 extends Component {




	render() {
		return (
			<div>
				<p>Zcomponent2</p>
				<p>{this.context.store.str}</p>
				<p>{this.context.store.num}</p>
			</div>
		)
	}









}

Zcomponent2.contextTypes = {
	store: PropTypes.object
}

export default Zcomponent2;

