import React, { Component } from "react";
import CatForm from "./CatForm";
import { createCat } from "./../../utils";

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
      cat: { ...this.state.cat, name: event.target.value }
    });
  };

  handleDescriptionChange = event => {
    this.setState({
      cat: { ...this.state.cat, description: event.target.value }
    });
  };

  handleSubmit = () => {
    if (this.state.cat.name.trim() === "") {
      return;
    }
    createCat(this.state.cat).then(response => {
      this.props.history.push(`/cats/${response.id}`);
    });
  };

  handleCancel = () => {
    this.props.history.push("/cats");
  };

  render() {
    return (
      <>
        <div className="Header">
          <div className="HeaderContent">
            <h1>ADD CAT</h1>
            <button className="ButtonAlt" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </div>
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
