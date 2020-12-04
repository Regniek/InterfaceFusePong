import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <div className="Navbar_left">
            <Link className="Navbar__brand" to="/">
              <span className="font-weight-light">Tickets</span>
            </Link>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Navbar;