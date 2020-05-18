import React, { Component } from "react";
import { connect } from "react-redux";

import PortfolioSelection from '../forms/portfolioSelection.jsx'

class UnconnectedApp extends Component {
  render = () => {
    return (
      <div>
          hello this is the homepage
          <PortfolioSelection />
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);

export default App;
