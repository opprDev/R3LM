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
      <li className="collection-item">
        <Link to={`/lists/${this.state.item.id}`}>
          {this.state.item.property_a}
        </Link>
      </li>
    )
  }
}

export default ListItem;
