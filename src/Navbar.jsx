import React, { Component } from "react";
import { connect } from "react-redux";
import './navbar.css'


class UnconnectedNavbar extends Component {
  render = () => {
    return (
      <div class ='navbar'>
          <img class ='img' src='https://i.imgur.com/0tdmw01.png'/>
          <div class='nav-text'><div class='nav-button'> Home </div> <div class='nav-button'>About</div> <div class='nav-button'>Contact</div> <div class='nav-button'>Tattoo Care</div> </div>
      </div>
    );
  };
}

let Navbar = connect()(UnconnectedNavbar);

export default Navbar;
