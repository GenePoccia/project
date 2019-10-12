import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from '../navbar/Navbar.jsx'

class UnconnectedCare extends Component {
  render = () => {
    return (
      <div>
          <Navbar />
          hello this is the care page
      </div>
    );
  };
}

let Care = connect()(UnconnectedCare);

export default Care;
