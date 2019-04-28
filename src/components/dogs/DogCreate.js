import React, { Component } from "react";
import DogForm from "./DogForm";
import { createDog } from "./../../utils";

class DogCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: {
        name: "",
        description: ""
      }
    };
  }

  handleNameChange = event => {
    this.setState({
      dog: { ...this.state.dog, name: event.target.value }
    });
  };

  handleDescriptionChange = event => {
    this.setState({
      dog: { ...this.state.dog, description: event.target.value }
    });
  };

  handleSubmit = () => {
    if (this.state.dog.name.trim() === "") {
      return;
    }
    createDog(this.state.dog).then(response => {
      this.props.history.push(`/dogs/${response.id}`);
    });
  };
  
  handleCancel = () => {
    this.props.history.push("/dogs");
  };

  render() {
    return (
      <>
        <div className="Header">
          <div className="HeaderContent">
            <h1>ADD DOG</h1>
            <button className="ButtonAlt" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </div>
        <DogForm
          dog={this.state.dog}
          onChangeName={this.handleNameChange}
          onChangeDescription={this.handleDescriptionChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default DogCreate;
