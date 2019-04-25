import React from 'react';
import { Link } from 'react-router-dom';

const MainScreen = () => {
  return (
    <>
      <Link to="/cats">Cats</Link>
      <Link to="/dogs">Dogs</Link>
    </>
  );
}

export default MainScreen;