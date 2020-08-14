import React, { Component } from "react";
import { connect } from "react-redux";

import Routes from './components/routes/Routes.jsx'
import Banner from './components/banner/banner'
import BannerLoggedIn from './components/banner/bannerLoggedIn'

class UnconnectedApp extends Component {
  //implement banner sign up vs login
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
