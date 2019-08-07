const addNumber = (state = 0, action) => {
	switch (action.type) {
		case "ADD_NUMBER":
			return state + action.value;
		default:
			return state;
	}
};

const reduceNumber = (state = 0, action) => {
	switch (action.type) {
		case "REDUCER_NUMBER":
			return state - action.value;
		default:
			return state;
	}
};

const renderNumber = (state = 0, action) => {
	switch (action.type) {
		case "RENDER_NUMBER":
			return state;
		default:
			return state;
	}
};

export default { addNumber, reduceNumber, renderNumber };
