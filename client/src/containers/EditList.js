import React, { Component } from 'react';
import axios from 'axios';
import ButtonBack from '../components/ButtonBack';

class EditList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      id: '',
      property_a: '',
      property_b: '',
      property_c: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount () {
    this.getListDetails();
  }

  getListDetails () {
    let listId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/rrrlm_models/${listId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        property_a: response.data.property_a,
        property_b: response.data.property_b,
        property_c: response.data.property_c,
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
  }

  editList (newList) {
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/rrrlm_models/${this.state.id}`,
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
    this.editList(newList);
    e.preventDefault();
  }

  handleInputChange (e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div>
        <ButtonBack/>
        <h1>
          Edit List
        </h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              type="text"
              name="property_a"
              ref="property_a"
              value={this.state.property_a}
              onChange={this.handleInputChange.bind(this)}
            />
            <label htmlFor="property_a" className="active">
              Property A *
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="property_b"
              ref="property_b"
              value={this.state.property_b}
              onChange={this.handleInputChange.bind(this)}
            />
            <label htmlFor="property_b" className="active">
              Property B *
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="property_c"
              ref="property_c"
              value={this.state.property_c}
              onChange={this.handleInputChange.bind(this)}
            />
            <label htmlFor="property_c" className="active">
              Property C
            </label>
          </div>
          <input
            type="submit"
            value="Save"
            className="btn"
          />
        </form>
      </div>
    )
  }

}

export default EditList;
