import React, { Component } from 'react';

import './styles.css';


export default class CityItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log("Дыц!!!");
		this.setState(({ clicked }) => ({
			clicked: !clicked
		}));
	}

	render() {
		const { city, description, onDelete } = this.props;
		const { clicked } = this.state;

		let classNames = '';

		if (clicked) classNames = 'red';
		if (!clicked) classNames = '';

		return (
			<div className={classNames}>
				<p
					onClick={this.handleClick} >City: {city}</p>
				<i>Description: {description}</i>
				<button
					onClick={onDelete} >Delete!</button>
			</div>
		)
	}
}