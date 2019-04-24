import React from 'react';
import withLoader from './withLoader';

const CatsDisplay = ({ cats }) => {
  console.log(cats);
  return (
    <ul>
      {cats.map(cat => 
        <li key={cat.id}>
          <h2>{cat.name}</h2>
          <p>{cat.description}</p>
        </li>
      )}
    </ul>
  )
};

export default withLoader('cats')(CatsDisplay);