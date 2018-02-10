import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonAdd extends Component {
  render () {
    return (
      <div>
        <Link to="/lists/add" className="btn-floating btn-large red">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    )
  }
}

export default ButtonAdd;
