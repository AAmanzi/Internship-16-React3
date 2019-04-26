import React from 'react';
import withLoader from './../withLoader';
import {Link} from 'react-router-dom';

const CatsList = ({ cats }) => {
  return (
    <ul>
      {cats.map(cat => 
        <li key={cat.id}>
          <h2><Link to={`/cats/${cat.id}`}>{cat.name}</Link></h2>
        </li>
      )}
    </ul>
  )
};

export default withLoader('cats')(CatsList);