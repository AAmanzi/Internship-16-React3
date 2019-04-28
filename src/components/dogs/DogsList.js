import React, { Component } from "react";
import withLoader from "./../withLoader";
import { Link } from "react-router-dom";

class DogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: null
    };
  }

  showPanel = index => {
    this.setState({ activePanel: index });
  };

  resetPanels = () => {
    this.setState({ activePanel: null });
  };

  render() {
    const { dogs } = this.props;
    return (
      <ul className="AnimalsList">
        {dogs.map((dog, index) => (
          <Link
            key={dog.id}
            onMouseOver={() => this.showPanel(index)}
            onMouseOut={this.resetPanels}
            className="AnimalListItem"
            to={`/dogs/${dog.id}`}
          >
            <span
              className={`${
                index % 2
                  ? `AnimalPanelRight ${
                      this.state.activePanel === index ? "PanelRightActive" : ""
                    }`
                  : `AnimalPanelLeft ${
                      this.state.activePanel === index ? "PanelLeftActive" : ""
                    }`
              }`}
            />
            <li>
              <h2>{dog.name}</h2>
            </li>
          </Link>
        ))}
      </ul>
    );
  }
}

export default withLoader("dogs")(DogsList);
