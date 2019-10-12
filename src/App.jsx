import React, { Component } from "react";
import { connect } from "react-redux";
import  Navbar  from './Navbar.jsx'


class UnconnectedApp extends Component {
  render = () => {
    return (
      <div>
          <Navbar />
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);

export default App;
