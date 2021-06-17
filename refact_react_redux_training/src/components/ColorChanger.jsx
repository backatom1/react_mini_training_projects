import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { red, green, blue, reset } from '../redux/actions/bgActions';

import '../styles.css';

function ColorChanger() {

	const dispatch = useDispatch();
	const bgColorChange = useSelector((state) => state.bgReducer.bgColor);

	const onRedBg = () => {
		dispatch(red());
	};
	const onGreenBg = () => {
		dispatch(green());
	};
	const onBlueBg = () => {
		dispatch(blue());
	};
	const onResetBg = () => {
		dispatch(reset());
	};

	const className = 'main-color-block ';

	return (
		<div>
			<div className={className + bgColorChange} ></div>
			<div className='btn-wrapper'>
				<button onClick={onRedBg} className='btn' >--RED--</button>
				<button onClick={onGreenBg} className='btn' >--GREEN--</button>
				<button onClick={onBlueBg} className='btn' >--BLUE--</button>
				<button onClick={onResetBg} className='btn btn-orange' >--RESET--</button>
			</div>
		</div>
	)
}
export default ColorChanger;