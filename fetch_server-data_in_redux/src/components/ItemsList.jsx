import React from 'react';
import { useSelector } from 'react-redux';

function ItemsList() {

	const items = useSelector(({ items }) => items);

	console.log('ItemsList:', items);

	return (
		<div>
			{
				items.map(obj => (
					<div key={obj.id}>
						<br />
						<img src={obj.imageURL} alt={obj.name} />
						<p>Name: {obj.name}</p>
						<p>Price: {obj.price}</p>
					</div>
				)

				)
			}
		</div>
	)
}

export default ItemsList;
