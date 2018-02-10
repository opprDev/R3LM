import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItem extends Component {

  constructor (props) {
    super(props);
    this.state = {
      item: props.item
    }
  }

  render () {
    return (
      <li className="collection-item">{this.state.item.property_a}</li>
    )
  }
}

export default ListItem;
