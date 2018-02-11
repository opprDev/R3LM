import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ButtonBack from './ButtonBack';

class ListDetails extends Component {

  constructor (props) {
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount () {
    this.getList();
  }

  getList () {

    let listId = this.props.match.params.id

    axios.get(`http://localhost:3000/api/rrrlm_models/${listId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <ButtonBack/>
        <h1>
          {this.state.details.property_a}
        </h1>
        <ul className="collection">
          <li className="collection-item">
            property_b: {this.state.details.property_b}
          </li>
          <li className="collection-item">
            property_c: {this.state.details.property_c}
          </li>
        </ul>
        <Link className="btn" to={`/lists/edit/${this.state.details.id}`}>
          Edit
        </Link>
        <button className="btn red right">
          Delete
        </button>
      </div>
    )
  }
}

export default ListDetails;
