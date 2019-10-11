import React, { Component } from "react";
import { connect } from "react-redux";


class UnconnectedApp extends Component {
  render = () => {
    return (
      <div>
          Hello - test 
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);

export default App;
