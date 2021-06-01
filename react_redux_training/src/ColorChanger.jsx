import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

import './styles.css';

function ColorChanger({ bg, red, green, blue, reset }) {

	const className = 'main-color-block ';

	return (
		<div>
			<div className={className + bg} ></div>
			<div className='btn-wrapper'>
				<button onClick={red} className='btn' >--RED--</button>
				<button onClick={green} className='btn' >--GREEN--</button>
				<button onClick={blue} className='btn' >--BLUE--</button>
				<button onClick={reset} className='btn btn-orange' >--RESET--</button>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		bg: state,
	};
}

export default connect(mapStateToProps, actions)(ColorChanger);
