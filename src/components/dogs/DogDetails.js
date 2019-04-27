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
        <h2>{this.state.dog.name}</h2>
        <p>{this.state.dog.description}</p>
        <Link to={`/dogs/update/${this.state.dog.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={this.handleDelete}>Delete</button>
      </>
    );
  }
}

export default DogDetails;
