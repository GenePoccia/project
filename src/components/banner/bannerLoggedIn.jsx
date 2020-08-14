import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";
import './bannerCss.css';


class UnconnectedBannerLoggedIn extends Component {
  render = () => {
    return (
      <div className="banner flex">
        <div className="bannerLeft">
          <Link to="/">Home</Link>
        </div>
        <div className="bannerRight">
          <Link to="/account">Account</Link>
        </div>
      </div>
    );
  };
}

let BannerLoggedIn = connect()(UnconnectedBannerLoggedIn);

export default BannerLoggedIn;
