import React from "react";
import { withRouter } from "react-router-dom";

const Catform = props => {
  const handleCancel = () => {
    props.history.push("/cats");
  };

  return (
    <div>
      <input
        type="text"
        value={props.cat ? props.cat.name : ""}
        onChange={props.onChangeName}
        placeholder="Insert a funky cat name"
      />
      <textarea
        rows="3"
        cols="20"
        placeholder="Cat description"
        value={props.cat ? props.cat.description : ""}
        onChange={props.onChangeDescription}
      />
      <button onClick={props.onSubmit}>Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default withRouter(Catform);
