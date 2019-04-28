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
    if(this.state.cat.name.trim() === ""){
      return;
    }
    updateCat(this.state.cat).then(response => {
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
            <h1>EDIT CAT</h1>
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

export default CatUpdate;
