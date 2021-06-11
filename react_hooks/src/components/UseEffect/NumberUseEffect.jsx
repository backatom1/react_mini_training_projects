import React from 'react';

function NumberUseEffect() {

	const initialState = [1, 2, 3];

	const [state, setState] = React.useState(initialState);
	const [count, setCount] = React.useState(0);

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

	const countInc = () => {
		setCount(count + 1);
	};

	//* componentDidMount
	React.useEffect(() => {
		console.log('Component Mount');
	}, []);

	//* componentDidUpdate для "state"
	React.useEffect(() => {
		console.log('Update "state"');
	}, [state]);

	//* componentDidUpdate для "count"
	React.useEffect(() => {
		console.log('Update "count"');
	}, [count]);

	//* componentDidUpdate который срабатывает при изменении любого значения
	React.useEffect(() => {
		console.log('Update');
	});

	//* componentDidMount + componentWillUnmount
	React.useEffect(() => {
		console.log('Component Mount (with Unmount)');
		return () => {
			console.log('Component Unmount');
		};
	}, []);

	return (
		<div className='block app' >
			<div>{count}</div>
			<button onClick={countInc} >'[+]'</button>
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

export default NumberUseEffect
