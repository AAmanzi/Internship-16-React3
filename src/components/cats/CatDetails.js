import React, { Component } from "react";
import { fetchCatDetails, deleteCat } from "./../../utils";
import { Link } from "react-router-dom";

class CatDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetchCatDetails(id).then(response => {
      this.setState({ cat: response });
    });
  }

  handleDelete = () => {
    deleteCat(this.state.cat).then(() => {
      this.props.history.push("/cats");
    });
  };

  render() {
    if (!this.state.cat) return null;
    return (
      <>
        <h2>{this.state.cat.name}</h2>
        <p>{this.state.cat.description}</p>
        <Link to={`/cats/update/${this.state.cat.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={this.handleDelete}>Delete</button>
      </>
    );
  }
}

export default CatDetails;
