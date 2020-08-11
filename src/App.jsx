import React, { Component } from "react";
import { connect } from "react-redux";

import Routes from './components/routes/Routes.jsx'
import Banner from './components/banner/banner'

class UnconnectedApp extends Component {
  render = () => {
    return (
      <div>
          <Banner />
          <Routes />
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);

export default App;
