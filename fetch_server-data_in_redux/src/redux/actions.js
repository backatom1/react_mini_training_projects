import axios from "axios";

export const fetchItems = (dispatch) => {
	axios.get('http://localhost:3001/products')
		.then(data => data.data)
		.then(items => dispatch(setItems(items)));
};

export const setItems = (items) => ({
	type: 'SET_ITEMS',
	payload: items
});