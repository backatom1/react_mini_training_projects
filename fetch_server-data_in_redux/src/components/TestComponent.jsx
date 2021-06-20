import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchItems } from '../redux/actions';

function TestComponent() {

	const dispatch = useDispatch();

	function fetch() {
		fetchItems(dispatch)
	};

	return (
		<div>
			<b>Test</b>
			<button onClick={fetch}>fetch items</button>
		</div>
	);
}

export default TestComponent;