import React from "react";
import { withRouter } from "react-router-dom";

const Dogform = props => {
  const handleCancel = () => {
    props.history.push("/dogs");
  };

  return (
    <div>
      <input
        type="text"
        value={props.dog ? props.dog.name : ""}
        onChange={props.onChangeName}
        placeholder="Insert a funky dog name"
      />
      <textarea
        rows="3"
        cols="20"
        placeholder="Dog description"
        value={props.dog ? props.dog.description : ""}
        onChange={props.onChangeDescription}
      />
      <button onClick={props.onSubmit}>Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default withRouter(Dogform);
