import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchDogs } from "./../../utils";
import DogsList from "./DogsList";

class DogsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: null
    };
  }

  componentDidMount() {
    fetchDogs().then(response => {
      this.setState({ dogs: response });
    });
  }

  render() {
    return (
      <div>
        <div className="Header">
          <div className="HeaderContent">
            <h1>DOGS</h1>
            <Link to="/dogs/create">
              <button className="ButtonAlt">Add dog</button>
            </Link>
          </div>
          <nav>
            <ul>
              <li className="NavItem">
                <Link to="/">HOME</Link>
              </li>
              <li className="NavItem">
                <Link to="/cats">CATS</Link>
              </li>
              <li className="NavItem">
                <Link to="/dogs">DOGS</Link>
                <div className="BulletPoint">&#8226;</div>
              </li>
            </ul>
          </nav>
        </div>
        <DogsList dogs={this.state.dogs} />
      </div>
    );
  }
}

export default DogsDisplay;
