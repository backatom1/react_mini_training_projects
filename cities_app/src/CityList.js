import React from 'react';
import CityItem from './CityItem';

const CityList = ({ citys, onDelete }) => {

	const cityItems = citys.map(item => {

		if (typeof item === 'object' && isEmpty(item)) {

			const { city, description, id } = item;

			return (
				<li key={id} >
					<CityItem
						city={city}
						description={description}
						onDelete={() => onDelete(id)} />
				</li>
			);
		}
	});

	function isEmpty(obj) {
		for (let key in obj) {
			return true;
		}
		return false;
	}

	return (
		<div>
			{cityItems}
			{console.log("CitiList:", citys)}
		</div>
	)
}

export default CityList;