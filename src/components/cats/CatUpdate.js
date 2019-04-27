import React, { Component } from "react";
import CatForm from "./CatForm";
import { updateCat, fetchCatDetails } from "./../../utils";

class CatUpdate extends Component {
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

  handleNameChange = event => {
    this.setState({
      cat: {
        ...this.state.cat,
        name: event.target.value
      }
    });
  };

  handleDescriptionChange = event => {
    this.setState({
      cat: {
        ...this.state.cat,
        description: event.target.value
      }
    });
  };

  handleSubmit = () => {
    updateCat(this.state.cat).then(response => {
      this.props.history.push(`/cats/${response.id}`);
    });
  };

  render() {
    return (
      <>
        <h1>Edit cat</h1>
        <CatForm
          cat={this.state.cat}
          onChangeName={this.handleNameChange}
          onChangeDescription={this.handleDescriptionChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default CatUpdate;
