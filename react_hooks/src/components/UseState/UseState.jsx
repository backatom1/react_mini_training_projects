import React from 'react';

import '../../styles.css';

function UseState() {

	const initialState = [1, 2, 3];

	const [state, setState] = React.useState(initialState);

	const inc = state.length + 1;

	const addNumber = () => {
		//const num = Math.floor(Math.random() * 10);
		let num = inc;
		setState([...state, num]);
	};

	const delNumber = () => {
		let del = state.slice(0, state.length - 1);
		setState([...del]);
	};

	const clearNumber = () => {
		setState([]);
	};

	return (
		<div className='block app' >
			<ul>
				{state.map((item, index) => (
					<li key={index}> {item} </li>
				))}
			</ul>
			<div>
				<button
					className='btn'
					onClick={addNumber} >Добавить</button>
				<button
					className='btn'
					onClick={delNumber} >Удалить</button>
				<button
					className='btn btn-orange'
					onClick={clearNumber} >Очистить</button>
			</div>
		</div>
	)
}

export default UseState;
