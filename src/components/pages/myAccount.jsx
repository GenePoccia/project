import React, { Component } from "react";
import { connect } from "react-redux";


class UnconnectMyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/getPortfolio")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          portfolio: data.body[0].portfolio,
        });
      });
  }

  render = () => {
    return this.state.portfolio.map((ele) => {
      return <div><br/>{ele}<br/></div>;
    });
  };
}

let MyAccount = connect()(UnconnectMyAccount);

export default MyAccount;
