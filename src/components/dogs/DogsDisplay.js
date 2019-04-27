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
        <div>
          <h1>Dogs</h1>
          <Link to="/dogs/create">
            <button>Add new</button>
          </Link>
        </div>
        <DogsList dogs={this.state.dogs} />
      </div>
    );
  }
}

export default DogsDisplay;
