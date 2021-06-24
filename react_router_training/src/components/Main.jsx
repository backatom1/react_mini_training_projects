import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
	return (
		<div>
			<h1>Main</h1>
			<ul>
				<li>
					<Link to='/'>Main</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contacts'>Contacts</Link>
				</li>
			</ul>
		</div>
	)
}

export default Main;
