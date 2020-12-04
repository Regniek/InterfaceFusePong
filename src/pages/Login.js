import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Login(){
  return(
    <div className="Login col-md-8 offset-md-2 pt-4">
      <div className="row col-md-8 offset-md-2">
        <div className="col">
          <h3>Welcome to TicketApp - Register here</h3>
        </div>
      </div>
    <form >
      <div className="form-row pt-2">
        <div className="col">
          <input type="email" className="form-control" placeholder="Email"/>
        </div>
        <div className="col">
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
      </div>
             
    <Link to="/project" className="btn btn-primary col-8 offset-2 mt-4"> Sign In </Link>
    </form>
    </div>
  )
}

export default  Login 
