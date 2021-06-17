import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { inc, dec } from '../redux/actions/counterActions';

import '../styles.css';

function Counter() {

	const dispatch = useDispatch();
	const counter = useSelector(state => state.counterReducer.count);

	const incCount = () => {
		dispatch(inc());
	};

	const decCount = () => {
		dispatch(dec());
	};

	return (
		<div className="main-color-block">
			<h1 >{counter}</h1>
			<div className="btn-wrapper">
				<button onClick={incCount} className="btn">Increment</button>
				<button onClick={decCount} className="btn">Decrement</button>
			</div>
		</div>
	);
};

export default Counter;
