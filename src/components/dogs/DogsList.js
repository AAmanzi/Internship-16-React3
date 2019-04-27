import React from "react";
import withLoader from "./../withLoader";
import { Link } from "react-router-dom";

const DogsList = ({ dogs }) => {
  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog.id}>
          <h2>
            <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default withLoader("dogs")(DogsList);
