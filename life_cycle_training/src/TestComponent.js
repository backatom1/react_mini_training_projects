
import { Component } from 'react';
import './App.css'

export default class TestComponent extends Component {

	constructor(props) {

		console.log('Constructor');

		super(props);

		this.state = {
			redBg: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	static getDerivedStateFromProps(props, state) {
		console.group('static getDerivedStateFromProps');
		console.log('Props: ', props);
		console.log('State: ', state);
		console.groupEnd();
		return (null);
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate()');
		return null;
	}

	componentDidMount() {
		console.log('componentDidMount()')
	}

	componentDidUpdate() {
		console.log('componentDidUpdate()');
	}

	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate()');
	}

	componentWillUnmount() {
		console.log('unmounting');
	}

	handleClick() {
		this.setState(({ redBg }) => ({
			redBg: !redBg
		}));
	}

	render() {
		console.log('render()')

		const { redBg } = this.state;

		let className = '';

		if (redBg) className = 'red';
		if (!redBg) className = '';

		return (
			<div className="App">
				<header className="App-header">
					<h1 className={className}
						onClick={this.handleClick} >Test</h1>
				</header>
			</div>
		)
	}
}