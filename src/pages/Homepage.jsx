import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from '../navbar/Navbar.jsx'
import Dropdown from '../Dropdown.jsx'

class UnconnectedApp extends Component {
  render = () => {
    return (
      <div>
          <Navbar />
          hello this is the homepage
          <Dropdown />
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);

export default App;
