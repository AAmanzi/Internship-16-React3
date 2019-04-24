import React from 'react';
import withLoader from './withLoader';

const DogsDisplay = ({ dogs }) => {
  console.log(dogs);
  return (
    <ul>
      {dogs.map(dog => 
        <li key={dog.id}>
          <h2>{dog.name}</h2>
          <p>{dog.description}</p>
        </li>
      )}
    </ul>
  )
};

export default withLoader('dogs')(DogsDisplay);