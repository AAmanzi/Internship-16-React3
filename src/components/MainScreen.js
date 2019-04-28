import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/MainScreen.css";
import "./styles/Header.css";
import "./styles/Common.css"
import "./styles/AnimalsList.css";
import "./styles/AnimalDetails.css";
import "./styles/AnimalForm.css";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: null
    };
  }

  showLeftPanel = () => {
    this.setState({ activePanel: "left" });
  };

  showRightPanel = () => {
    this.setState({ activePanel: "right" });
  };

  resetPanels = () => {
    this.setState({ activePanel: null });
  };

  render() {
    return (
      <div className="MainScreenWrapper">
        <span
          className={`PanelLeft ${
            this.state.activePanel === "left" ? "PanelLeftActive" : ""
          }`}
        />
        <span
          className={`PanelRight ${
            this.state.activePanel === "right" ? "PanelRightActive" : ""
          }`}
        />
        <div className="MainScreenCats">
          <Link to="/cats">
            <button
              onMouseOver={this.showLeftPanel}
              onMouseOut={this.resetPanels}
            >
              CATS
            </button>
          </Link>
        </div>
        <div className="MainScreenDogs">
          <Link to="/dogs">
            <button
              onMouseOver={this.showRightPanel}
              onMouseOut={this.resetPanels}
            >
              DOGS
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainScreen;
