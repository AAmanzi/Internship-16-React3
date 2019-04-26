import React, { Component } from "react";
import CatForm from "./CatForm";
import {createCat} from './../../utils';

class CatCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {
        name: "",
        description: ""
      }
    };
  }

  handleNameChange = event => {
    this.setState({
      cat: { name: event.target.value, description: this.state.cat.description }
    });
  };

  handleDescriptionChange = event => {
    this.setState({ cat: { name: this.state.cat.name, description: event.target.value } });
  };

  handleSubmit = () => {
    createCat(this.state.cat).then(response => {
      this.props.history.push(`/cats/${response.id}`);
    })
  };

  render() {
    return (
      <>
        <h1>Add cat</h1>
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

export default CatCreate;
