
const initState = {
	items: []
};

function reducer(state = initState, action) {
	switch (action.type) {
		case 'SET_ITEMS':
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}

export default reducer;