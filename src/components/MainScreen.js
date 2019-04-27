import React from "react";
import { Link } from "react-router-dom";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="MainScreenWrapper">
      <div className="MainScreenCats">
        <Link to="/cats">
          <button>CATS</button>
        </Link>
      </div>
      <div className="MainScreenDogs">
        <Link to="/dogs">
          <button>DOGS</button>
        </Link>
      </div>
    </div>
  );
};

export default MainScreen;
