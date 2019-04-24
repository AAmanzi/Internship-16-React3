import React, { Component } from 'react';
import {fetchDogs} from './../utils';
import DogsDisplay from './DogsDisplay';

class Dogs extends Component{
  constructor(props){
    super(props);
    this.state = {
      dogs: null
    };
  }

  componentDidMount() {
    fetchDogs().then(response => {
      this.setState({dogs: response});
    })
  }

  render(){
    return(
      <div>
        <h1>Dogs</h1>
        <DogsDisplay dogs={this.state.dogs}/>
      </div>
    )
  }
}

export default Dogs;