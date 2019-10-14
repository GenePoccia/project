import React, { Component } from "react";
import { connect } from "react-redux";
import './navbar.css'

import { Link } from 'react-router-dom'


class UnconnectedNavbar extends Component {
  render = () => {
    return (
      <div class ='navbar'>
          <img class ='img' src='https://i.imgur.com/0tdmw01.png'/>
          <div class='nav-text'>
          <div class='nav-button'><Link to='/'> Home </Link>  </div>
          <div class='nav-button'><Link to='/about'>About</Link></div>
          <div class='nav-button'><Link to='/artwork'>Artwork</Link></div>
          <div class='nav-button'><Link to='/contact'>Contact</Link></div>
          <div class='nav-button'><Link to='/care'>Tattoo Care</Link></div>
       </div>
      </div>
    );
  };
}

let Navbar = connect()(UnconnectedNavbar);

export default Navbar;
