import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/Register.css';

function Register(){
  const [dropdown, setDropdown]=useState(false);
  const openCloseDropdown=()=>{
  setDropdown(!dropdown);
  }
  
  return (
    <div className="Register  col-md-8 offset-md-2 pt-4">
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
          <input type="email" className="form-control" placeholder="Verify Email"/>
        </div>
      </div>
      <div className="form-row pt-2">
        <div className="col">
          <input type="text" className="form-control" placeholder="First Name"/>
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last Name"/>
        </div>
      </div>
      <div className="form-row pt-2">
        <div className="col">
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <div className="col">
          <input type="password" className="form-control" placeholder="Password confirm"/>
        </div>
      </div>
          <Dropdown isOpen={dropdown} toggle={openCloseDropdown}  >
              <DropdownToggle caret className="dropdown-toggle col-4 offset-4 mt-4" >
                Select the company
              </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem onClick={()=>{alert('sifunciona')}}>Movistar</DropdownItem>
                  <DropdownItem>Claro</DropdownItem>
                  <DropdownItem>Tigo</DropdownItem>
              </DropdownMenu>
          </Dropdown>
       
    <button className="btn btn-primary col-8 offset-2 mt-4"> Sign Up </button>
    </form>
  </div>
  );




}

export default Register;