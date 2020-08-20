import React, { Component } from "react";
import { connect } from "react-redux";


import Login from '../forms/login'
import Signup from '../forms/signup'

class UnconnectedLoginSignup extends Component {
  render = () => {
    return (
      <div>
        <h2>Log in</h2>
        <Login />
        <h2>Sign up</h2>
        <Signup />
      </div>
    );
  };
}

let LoginSignup = connect()(UnconnectedLoginSignup);

export default LoginSignup;
