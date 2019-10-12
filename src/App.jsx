import React, { Component } from "react";
import { connect } from "react-redux";

import Routes from './routes/Routes.jsx'

class UnconnectedApp extends Component {
  render = () => {
    return (
      <div>
          <Routes />
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);

export default App;
