import React from 'react';
import { useSelector } from 'react-redux';

function ViewStore() {

	const storeView = useSelector((store) => store);

	console.log(storeView);

	return (
		<div>
			<b>ViewStore Component</b>
		</div>
	)
}

export default ViewStore
