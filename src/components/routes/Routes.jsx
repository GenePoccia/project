import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";

import Homepage from '../pages/Homepage.jsx'
import MyAccount from '../pages/myAccount.jsx'
import Signup from '../forms/signup.jsx'

class UnconnectedRoutes extends Component {
    renderRoot = () => {
        return <Homepage />
    }

    renderAccount = () => {
      return <MyAccount />
    }

    renderLoginSignup = () => {
      return <Signup />
    }


  render = () => {
    console.log('routes')
    return (
      <div>
          <Route exact={true} path="/" render={this.renderRoot} />
          <Route exact={true} path="/account" render={this.renderAccount} />
          <Route exact={true} path="/signup" render={this.renderSignup} />
      </div>
    );
  };
}

let Routes = connect()(UnconnectedRoutes);

export default Routes;
