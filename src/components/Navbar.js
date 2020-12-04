import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <span className="font-weight-light">Home</span>
          </Link>
          <Link className="Navbar__brand" to="/login">
            <span className="font-weight-light">Login</span>
          </Link>
          <Link className="Navbar__brand" to="/register">
            <span className="font-weight-light">Register</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;