import React from "react";
import { withRouter } from "react-router-dom";

const Dogform = props => {
  return (
    <div>
      <div className="AnimalForm">
        <input
          type="text"
          value={props.dog ? props.dog.name : ""}
          onChange={props.onChangeName}
          placeholder="Insert a funky dog name"
        />
        <textarea
          rows="3"
          cols="50"
          placeholder="Dog description"
          value={props.dog ? props.dog.description : ""}
          onChange={props.onChangeDescription}
        />
      </div>
      <div className="Options">
        <p>Happy with the changes?</p>
        <button className="ButtonEdit" onClick={props.onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default withRouter(Dogform);
