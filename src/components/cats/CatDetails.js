import React, { Component } from "react";
import { fetchCatDetails } from "./../../utils";
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

  render() {
    if (!this.state.cat) return null;
    return (
      <>
        <h2>{this.state.cat.name}</h2>
        <p>{this.state.cat.description}</p>
        <Link to={`/cats/update/${this.state.cat.id}`}>
          <button>Edit</button>
        </Link>
      </>
    );
  }
}

export default CatDetails;
