import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from 'react-router-dom'

import './css/dropdown.css'

class UnconnectedDropdown extends Component {
    constructor() {
        super();
        this.state = {
            displayMenu: false
        }
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu)
        })
    }

    hideDropdownMenu(event) {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu)
        })
    }

  render = () => {
    return (
        <div  className="dropdown">
            <div className="button" onClick={this.showDropdownMenu}> <img class="dropdown-img" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-256.png" /> </div>
        { this.state.displayMenu ? (
            <ul>
           <li><Link to='/'> Home </Link> </li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/artwork'>Artwork</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
           <li><Link to='/care'>Tattoo Care</Link></li>
            </ul>
          ):
          (
            null
          )
          }</div>
     );
  };
}

let Dropdown = connect()(UnconnectedDropdown);

export default Dropdown;
