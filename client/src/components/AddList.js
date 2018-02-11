import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ButtonBack from './ButtonBack';

class AddList extends Component {

  addList (newList) {
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/rrrlm_models',
      data: newList
    })
    .then(response => {
      this.props.history.push('/');
    })
    .catch(err => console.log(err));
  }

  onSubmit (e) {
    const newList = {
      property_a: this.refs.property_a.value,
      property_b: this.refs.property_b.value,
      property_c: this.refs.property_c.value
    }
    this.addList(newList);
    e.preventDefault();
  }

  render () {
    return (
      <div>
        <ButtonBack/>
        <h1>Add List</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="property_a" ref="property_a" />
            <label htmlFor="property_a">Property A *</label>
          </div>
          <div className="input-field">
            <input type="text" name="property_b" ref="property_b" />
            <label htmlFor="property_b">Property B *</label>
          </div>
          <div className="input-field">
            <input type="text" name="property_c" ref="property_c" />
            <label htmlFor="property_c">Property C</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }

}

export default AddList;
