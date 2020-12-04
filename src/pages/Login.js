import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
      return (
          <div>
              <h1>Aqui va el Login</h1>
                <Link className="btn btn-primary" to="/project">
                  Start
                </Link>
          </div>    
      );
    }
  }