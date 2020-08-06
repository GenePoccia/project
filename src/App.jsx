import React, { Component } from "react";
import { connect } from "react-redux";

import Routes from './routes/Routes.jsx'
import Banner from './banner/banner'
class UnconnectedApp extends Component {
  render = () => {
    console.log('app')
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
