import React, { Component } from 'react';

import './styles.css';

export default class CityAdd extends Component {

	constructor(props) {
		super(props);
		this.state = {
			city: '',
			description: ''
		};

		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.handleChangeDescription = this.handleChangeDescription.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChangeCity(event) {
		this.setState({ city: event.target.value });
	}

	handleChangeDescription(event) {
		this.setState({ description: event.target.value });
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.onAdd(this.state.city, this.state.description);

		this.setState({
			city: '',
			description: ''
		});
	}

	render() {
		return (
			<form
				className='form'
				onSubmit={this.onSubmit} >

				<div>
					<label htmlFor="city" >City name: </label>
					<input
						id="city"
						onChange={this.handleChangeCity}
						value={this.state.city} />
				</div>
				<div>
					<label htmlFor="description" >Description: </label>
					<input
						id="description"
						onChange={this.handleChangeDescription}
						value={this.state.description} />
				</div>
				<button
					type='submit' >
					Add city</button>
			</form>
		)
	}
}