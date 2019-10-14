import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from '../navbar/Navbar.jsx'
import Instagram from './Instagram.jsx'

class UnconnectedArtwork extends Component {
  render = () => {
    return (
      <div>
          <Navbar />
          <Instagram />
      </div>
    );
  };
}

let Artwork = connect()(UnconnectedArtwork);

export default Artwork;
