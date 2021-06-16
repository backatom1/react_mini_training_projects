import React from 'react';
import { connect } from 'react-redux';

import * as counterActions from '../redux/actions/counterActions';

import '../styles.css';

function Counter({ counter, inc, dec }) {
	return (
		<div className="main-color-block">
			<h1 >{counter}</h1>
			<div className="btn-wrapper">
				<button onClick={inc} className="btn">Increment</button>
				<button onClick={dec} className="btn">Decrement</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		counter: state.counterReducer,
	};
};

export default connect(mapStateToProps, counterActions)(Counter);
