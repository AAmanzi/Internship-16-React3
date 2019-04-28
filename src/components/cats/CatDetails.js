import React, { Component } from "react";
import { fetchCatDetails, deleteCat } from "./../../utils";
import { Link } from "react-router-dom";

class CatDetails extends Component {
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

  handleDelete = () => {
    deleteCat(this.state.cat).then(() => {
      this.props.history.push("/cats");
    });
  };

  render() {
    if (!this.state.cat) return null;
    return (
      <>
        <div className="Header">
          <div className="HeaderContent">
            <h1>CAT INFO</h1>
            <button className="ButtonAlt" onClick={this.handleDelete}>
              Delete
            </button>
          </div>
          <nav>
            <ul>
              <li className="NavItem">
                <Link to="/">HOME</Link>
              </li>
              <li className="NavItem">
                <Link to="/cats">CATS</Link>
                <div className="BulletPoint">&#8226;</div>
              </li>
              <li className="NavItem">
                <Link to="/dogs">DOGS</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="AnimalInfo">
          <h2>{this.state.cat.name}</h2>
          <p>{this.state.cat.description}</p>
        </div>
        <div className="Options">
          <p>Fancy changing some details?</p>
          <Link to={`/cats/update/${this.state.cat.id}`}>
            <button className="ButtonEdit">Edit cat</button>
          </Link>
        </div>
      </>
    );
  }
}

export default CatDetails;
