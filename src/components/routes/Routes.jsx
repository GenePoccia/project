import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";

import Homepage from '../pages/Homepage.jsx'


class UnconnectedRoutes extends Component {
    renderRoot = () => {
        return <Homepage />
    }


  render = () => {
    console.log('routes')
    return (
      <div>
          <Route exact={true} path="/" render={this.renderRoot} />
      </div>
    );
  };
}

let Routes = connect()(UnconnectedRoutes);

export default Routes;
