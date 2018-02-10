import React, { Component } from 'react';
import axios from 'axios';

class Lists extends Component {

  constructor () {
    super();
    this.state = {
      lists: []
    }
  }

  componentWillMount () {
    this.getLists();
  }

  getLists () {
    axios.get('http://localhost:3000/api/rrrlm_models')
      .then(response => {
        console.log(response);
      })
  }

  render () {
    return (
      <div>
        <h1>Lists</h1>
      </div>
    )
  }
}

export default Lists;
