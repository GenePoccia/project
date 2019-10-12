import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from '../navbar/Navbar.jsx'

class UnconnectedContact extends Component {
  render = () => {
    return (
      <div>
          <Navbar />
          hello this is the contact page
      </div>
    );
  };
}

let Contact = connect()(UnconnectedContact);

export default Contact;
