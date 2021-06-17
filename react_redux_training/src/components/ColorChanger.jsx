import React from 'react';
import { connect } from 'react-redux';

import * as bgActions from '../redux/actions/bgActions';

import '../styles.css';

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

const mapStateToProps = (store) => {
	return {
		bg: store.bgReducer,
	};
}

/*
const mapDispatchToProps = (dispatch) => {
	return {
		red: () => dispatch(red()),
		green: () => dispatch(green()),
		blue: () => dispatch(blue()),
		reset: () => dispatch(reset())
	}
};
*/
// export default connect(mapStateToProps, mapDispatchToProps)(ColorChanger);

export default connect(mapStateToProps, bgActions)(ColorChanger);
