import React from 'react'

function List(props) {


	return (
		<ul>
			{props.users.map(o => <li key={o.id} onClick={() => props.details(o.id)}>{o.name}</li>)}
		</ul>
	)
}

export default List;