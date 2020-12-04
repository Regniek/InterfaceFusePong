import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/projects';

export default class Home extends Component {
    render() {
      return (
        <div className="Home">
            <div className="row col-md-8 offset-md-4 pt-4">
           <div className="col">
             <h1>Welcome to de TicketApp</h1>
             <p>in this app you can to work over any project without problems and easer!!</p>
           </div>
         </div>
         <div className="row col-md-8 offset-md-4 pt-4">
           <div className="col">
             <Link to="/login" className="btn btn-primary">Sign In</Link>
           </div>
           <div className="col">
             <Link to="/register" className="btn btn-primary">Sign Up</Link>
           </div>
         </div>
        </div>
         
         
      );
    }
  }