import React, { Component } from "react";
import { fetchDogDetails, deleteDog } from "./../../utils";
import { Link } from "react-router-dom";

class DogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetchDogDetails(id).then(response => {
      this.setState({ dog: response });
    });
  }

  handleDelete = () => {
    deleteDog(this.state.dog).then(() => {
      this.props.history.push("/dogs");
    });
  };

  render() {
    if (!this.state.dog) return null;
    return (
      <>
        <div className="Header">
          <div className="HeaderContent">
            <h1>DOG INFO</h1>
            <button className="ButtonAlt" onClick={this.handleDelete}>
              Delete
            </button>
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
        <div className="AnimalInfo">
          <h2>{this.state.dog.name}</h2>
          <p>{this.state.dog.description}</p>
        </div>
        <div className="Options">
          <p>Fancy changing some details?</p>
          <Link to={`/dogs/update/${this.state.dog.id}`}>
            <button className="ButtonEdit">Edit dog</button>
          </Link>
        </div>
      </>
    );
  }
}

export default DogDetails;
