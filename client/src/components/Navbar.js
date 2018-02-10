import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">R3LM</a>
            <a data-activates="main-menu" className="button-collapse">
              <i className="fa fa-bars"></i>
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i>
                  &nbsp;
                  Lists
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i>
                  &nbsp;
                  Lists
                </Link>
              </li>
              <li>
                <Link to="/lists/add">
                  <i className="fa fa-plus"></i>
                  &nbsp;
                  Add List
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
