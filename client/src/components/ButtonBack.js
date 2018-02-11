import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonBack extends Component {
  render () {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
      </div>
    )
  }
}

export default ButtonBack;
