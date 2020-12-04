import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
      return (
          <div>
              <h1>Hello World</h1>
                <Link className="btn btn-primary" to="/">
                  Start
                </Link>
                <Link className="btn btn-primary" to="/login">
                  Login
                </Link>
                <Link className="btn btn-primary" to="/register">
                  Register
                </Link>
          </div>    
      );
    }
  }