const initialState = {
	bgColor: 'grey'
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'RED':
			return {
				...state,
				bgColor: 'red'
			};
		case 'GREEN':
			return {
				...state,
				bgColor: 'green'
			};
		case 'BLUE':
			return {
				...state,
				bgColor: 'blue'
			};
		case 'RESET':
			return {
				...state,
				bgColor: 'reset'
			};
		default:
			return state;
	}
}

export default reducer;