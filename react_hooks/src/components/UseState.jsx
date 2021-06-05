import React from 'react';

import '../styles.css';

function UseState() {

	const initialState = [1, 2, 3];

	const [state, setState] = React.useState(initialState);

	const addNumber = () => {
		const num = Math.floor(Math.random() * 10);
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
		<div className='app' >
			<ul>
				{state.map((item, index) => (
					<li key={index}> {item} </li>
				))}
			</ul>
			<div>
				<button onClick={addNumber} >Добавить</button>
				<button onClick={delNumber} >Удалить</button>
				<button onClick={clearNumber} >Очистить</button>
			</div>
		</div>
	)
}

export default UseState;
