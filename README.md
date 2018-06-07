# zbc.react

-- for Interview --

## React 生命周期 ##

内外包含关系

	//初始化一次 1
	componentWillMount() {
		console.log('componentWillMount');
	}

	//1
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		console.log('componentWillReceiveProps');
	}

	//2
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState);
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

	//初始化一次 2
	componentDidMount() {
		console.log('componentDidMount');
	}

	//卸载前一次
	componentWillUnmount(){
		console.log('componentWillUnmount');
	}






