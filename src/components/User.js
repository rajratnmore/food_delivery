import React, { useState } from 'react';

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(2);
  return (
    <div className="userCard">
        <h1>count: {count}</h1>
        <h1>count: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Chalisgoan</h3>
        <h4>Contact: 7744876005</h4>
    </div>
  )
}

export default User;

