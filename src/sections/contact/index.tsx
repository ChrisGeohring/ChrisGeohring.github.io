import React, { Component } from 'react';
// import Lottie from 'react-lottie';
import './index.scss';

interface ContactState {
  isStopped: boolean;
  isPaused: boolean;
}

export default class Contact extends Component<{}, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  // render will know everything!
  render() {
    // const defaultOptions = {
    //   loop: false,
    //   autoplay: true,
    //   animationData: require('./react-logo.json'),
    //   rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice',
    //   },
    // };

    return (
      <div>
        <footer id="contact">
          <a id="linkedin" href="https://www.linkedin.com/in/chrisgeohring">
            <img alt="LinkedIn" src="./linkedinbw.png" width="40" height="40" />
          </a>
          {/* <Lottie
              options={defaultOptions}
              height={50}
              width={50}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
            /> */}
          <br />
        </footer>
      </div>
    );
  }
}
