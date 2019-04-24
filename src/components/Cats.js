import React, { Component } from 'react';
import {fetchCats} from './../utils';
import CatsDisplay from './CatsDisplay';

class Cats extends Component{
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
        <h1>Cats</h1>
        <CatsDisplay cats={this.state.cats}/>
      </div>
    )
  }
}

export default Cats;