import React from "react";
import { withRouter } from "react-router-dom";

const Catform = props => {
  return (
    <div>
      <div className="AnimalForm">
        <input
          type="text"
          value={props.cat ? props.cat.name : ""}
          onChange={props.onChangeName}
          placeholder="Insert a funky cat name"
        />
        <textarea
          rows="3"
          cols="50"
          placeholder="Cat description"
          value={props.cat ? props.cat.description : ""}
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

export default withRouter(Catform);
