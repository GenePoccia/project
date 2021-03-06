import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";


class UnconnectedSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleUsernameChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          E-mail:
          <input type="text" onChange={this.handleEmailChange} /> <br />
          Username:
          <input type="text" onChange={this.handleUsernameChange} /> <br />
          Password:
          <input type="password" onChange={this.handlePasswordChange} />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

let Signup = connect()(UnconnectedSignup);

export default Signup;
