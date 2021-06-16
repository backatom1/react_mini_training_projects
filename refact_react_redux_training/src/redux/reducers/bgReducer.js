const initialState = 'grey';

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'RED':
			return state = 'red';
		case 'GREEN':
			return state = 'green';
		case 'BLUE':
			return state = 'blue';
		case 'RESET':
			return state = '';
		default:
			return state;
	}
}

export default reducer;