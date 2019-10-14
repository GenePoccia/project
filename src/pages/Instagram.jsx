import React, { Component } from "react";
import { connect } from "react-redux";

import InstagramEmbed from 'react-instagram-embed';
import './css/Instagram.css'

class UnconnectedInstagram extends Component {
  render = () => {
    return (
      <div class='instagram-post'>
          <InstagramEmbed
  url='https://www.instagram.com/p/B3GKOxdDzcB/'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  injectScript
  protocol=''
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
      </div>
    );
  };
}

let Instagram = connect()(UnconnectedInstagram);

export default Instagram;
