import React from 'react'

function Card(props) {

  const user = props.user

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar} alt={user.name}/>
      <p>City: {user.details.city}</p>
      <p>Company: {user.details.company}</p>
      <p>Position: {user.details.position}</p>
    </div>
  )
}

export default Card;