import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";

import Homepage from '../pages/Homepage.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Care from '../pages/Care.jsx'

class UnconnectedRoutes extends Component {
    renderRoot = () => {
        return <Homepage />
    }

    renderAbout = () => {
        return <About />
    }

    renderContact = () => {
        return <Contact />
    }

    renderCare = () => {
        return <Care />
    }

  render = () => {
    return (
      <div>
          <Route exact={true} path="/" render={this.renderRoot} />
          <Route exact={true} path="/about" render={this.renderAbout}/>
          <Route exact={true} path="/contact" render={this.renderContact}/>
          <Route exact={true} path="/care" render={this.renderCare}/>
      </div>
    );
  };
}

let Routes = connect()(UnconnectedRoutes);

export default Routes;