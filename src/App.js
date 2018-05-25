
import React, { Component } from 'react';

//import { Animate } from './tests';
import DatePicker from 'antd/lib/date-picker';

import "antd/lib/date-picker/style/css.js";


function onChange(date, dateStr) {
	console.log(date);
	console.log(dateStr);
}




class App extends Component {

	//designer
	render() {

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

export default App;
