import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {fetchCats} from './../../utils';
import CatsList from './CatsList';

class CatsDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      cats: null
    };
  }

  componentDidMount() {
    fetchCats().then(response => {
      this.setState({cats: response});
    })
  }

  render(){
    return(
      <div>
        <div>
        <h1>Cats</h1>
        <Link to="/cats/create"><button>Add new</button></Link>
        </div>
        <CatsList cats={this.state.cats}/>
      </div>
    )
  }
}

export default CatsDisplay;