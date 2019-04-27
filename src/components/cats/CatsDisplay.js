import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchCats } from "./../../utils";
import CatsList from "./CatsList";

class CatsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: null
    };
  }

  componentDidMount() {
    fetchCats().then(response => {
      this.setState({ cats: response });
    });
  }

  render() {
    return (
      <div>
        <div className="Header">
          <div className="HeaderContent">
            <h1>CATS</h1>
            <Link to="/cats/create">
              <button className="ButtonAlt">Add cat</button>
            </Link>
          </div>
          <nav>
            <ul>
              <Link to="/">
                <li className="NavItem">HOME</li>
              </Link>
              <Link to="/cats">
                <li className="NavItem">CATS</li>
                <div className="BulletPoint">&#8226;</div>
              </Link>
              <Link to="/dogs">
                <li className="NavItem">DOGS</li>
              </Link>
            </ul>
          </nav>
        </div>
        <CatsList cats={this.state.cats} />
      </div>
    );
  }
}

export default CatsDisplay;
