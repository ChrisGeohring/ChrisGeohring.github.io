import React, { Component } from 'react';
import './index.scss';

export default class Home extends Component<{}, {}> {
  render() {
    return (
      <section id="home">
        <video id="myVideo" autoPlay loop muted playsInline>
          <source src="me.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    );
  }
}
