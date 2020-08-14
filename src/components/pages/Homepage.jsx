import React, { Component } from "react";
import { connect } from "react-redux";

import PortfolioSelection from '../forms/portfolioSelection.jsx'
import Login from '../forms/login'
import Signup from '../forms/signup'

class UnconnectedApp extends Component {
  componentDidMount() {
    fetch('http://localhost:4000/getPortfolio')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })

  }
  render = () => {
    return (
      <div>
          <PortfolioSelection />
          {/* <Login/> */}
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);

export default App;
