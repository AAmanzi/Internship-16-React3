import React, { Component } from "react";
import withLoader from "./../withLoader";
import { Link } from "react-router-dom";

class CatsList extends Component {
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
    const { cats } = this.props;
    return (
      <ul className="AnimalsList">
        {cats.map((cat, index) => (
          <Link
            key={cat.id}
            onMouseOver={() => this.showPanel(index)}
            onMouseOut={this.resetPanels}
            className="AnimalListItem"
            to={`/cats/${cat.id}`}
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
              <h2>{cat.name}</h2>
            </li>
          </Link>
        ))}
      </ul>
    );
  }
}

export default withLoader("cats")(CatsList);
