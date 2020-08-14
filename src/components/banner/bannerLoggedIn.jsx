import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";
import './bannerCss.css';

import Login from '../forms/login'


class UnconnectedBannerLoggedIn extends Component {

  render = () => {
    return (
      <div className="banner flex" >
            <div className="bannerLeft">Hello</div>
            <div className="bannerRight">Sign up</div>
      </div>
    );
  };
}

let BannerLoggedIn = connect()(UnconnectedBannerLoggedIn);

export default BannerLoggedIn;
