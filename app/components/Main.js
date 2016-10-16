import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar';

import '../styles/main.scss';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Navbar />

        {this.props.children}
      </div>
    );
  }
}

export default Main;
