import React from 'react'

function ColorBlocksUseState() {

	const initialState = 'grey';

	const [color, setColor] = React.useState(initialState);

	const redColored = () => {
		const red = 'red';
		setColor(red);
	};
	const greenColored = () => {
		const green = 'green';
		setColor(green);
	};
	const blueColored = () => {
		const blue = 'blue';
		setColor(blue);
	};
	const resetColor = () => {
		const reset = '';
		setColor(reset);
	};

	const className = 'color-block ';

	return (
		<div className='block'>
			<div className={className + color} ></div>
			<div className='btn-wrapper'>
				<button onClick={redColored} className='btn' >--RED--</button>
				<button onClick={greenColored} className='btn' >--GREEN--</button>
				<button onClick={blueColored} className='btn' >--BLUE--</button>
				<button onClick={resetColor} className='btn btn-orange' >--RESET--</button>
			</div>
		</div>
	)
}

export default ColorBlocksUseState
