import React, { Component } from "react";
import { connect } from "react-redux";

import PortfolioSelection from '../forms/portfolioSelection.jsx'
import Login from '../forms/login'

class UnconnectedApp extends Component {
  render = () => {
    return (
      <div>
        {/* <PortfolioSelection /> */}
        {/* <Login/> */}
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);

export default App;
