import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";
import './bannerCss.css';

import Signup from '../forms/signup'


class UnconnectedBanner extends Component {
  render = () => {
    return (
      <div className="banner flex">
        <div className="bannerLeft">Hello</div>
        <div className="bannerRight">Sign up | Login</div>
      </div>
    );
  };
}

let Banner = connect()(UnconnectedBanner);

export default Banner;
