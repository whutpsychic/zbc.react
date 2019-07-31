
import React, { Component } from 'react';

//import { Animate } from './tests';
import DatePicker from 'antd/lib/date-picker';

import "antd/lib/date-picker/style/index.css";


class Date extends Component {

	//designer
	render() {

		const { onChange } = this.props || (()=>{ });

		return (
			<div>
				<DatePicker onChange={onChange} />
			</div>
		)

	}


	componentDidMount() {

		//

	}


}

export default Date;








