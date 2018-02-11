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
    let listId = this.props.match.params.id;
    console.log("Get List ID: " + listId);
    const url = `http://localhost:3000/api/rrrlm_models/${listId}`;
    console.log("Assigned to Get URL: " + url);
    axios.get(url)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  onDelete () {
    let listId = this.state.details.id;
    console.log("Delete List ID: " + listId);
    const url = `http://localhost:3000/api/rrrlm_models/${listId}`;
    console.log("Assigned to Delete URL: " + url);
    axios.delete(url)
    .then(response => {
      console.log("Inside Response URL: " + url);
      console.log("Pushing History of: " + this.props.history.push('/'));
      this.props.history.push('/');
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
        <button onClick={this.onDelete.bind(this)} className="btn red right">
          Delete
        </button>
      </div>
    )
  }
}

export default ListDetails;
