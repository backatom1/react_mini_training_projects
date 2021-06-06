import React from 'react';

import NumberAddUseState from "./NumberAddUseState";
import ColorBlocksUseState from './ColorBlocksUseState';

import '../../styles.css';

function UseStateBlock() {
	return (
		<div className='app'>
			<NumberAddUseState />
			<ColorBlocksUseState />
		</div>
	)
}

export default UseStateBlock;
