import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

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
        this.setState({lists: response.data}, () =>{
          console.log(this.state);
        })
      })
  }

  render () {
    const listItems = this.state.lists.map((list, i) => {
      return (
        <ListItem key={list.id} item={list}/>
      )
    })
    return (
      <div>
        <h1>Lists</h1>
        <ul className="collection">
          {listItems}
        </ul>
      </div>
    )
  }
}

export default Lists;
