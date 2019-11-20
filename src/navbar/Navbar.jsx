import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from '../Dropdown.jsx'
import "./navbar.css";

import { Link } from "react-router-dom";

class UnconnectedNavbar extends Component {
  constructor() {
    super();
     
    this.width = window.innerWidth;
    
  }
  render = () => {
      return (
        <div className="navbar">
          <img className="img" src="https://i.imgur.com/0tdmw01.png" />
          <div class="nav-text">
            <div class="nav-button">
              <Link to="/"> Home </Link>{" "}
            </div>
            <div class="nav-button">
              <Link to="/about">About</Link>
            </div>
            <div class="nav-button">
              <Link to="/artwork">Artwork</Link>
            </div>
            <div class="nav-button">
              <Link to="/contact">Contact</Link>
            </div>
            <div class="nav-button">
              <Link to="/care">Tattoo Care</Link>
            </div>
          </div>
          <div class="dropdown">
        <Dropdown />
      </div>
        </div>
      );
     }
  };





let Navbar = connect()(UnconnectedNavbar);

export default Navbar;
