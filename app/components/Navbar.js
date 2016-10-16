import React, { Component } from 'react';
import WeatherFormContainer from '../containers/WeatherFormContainer';

import '../styles/navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>Weather</a>
          </div>

          <div className='navbar-right navbar-form'>
            <WeatherFormContainer />
          </div>
        </div>
      </nav>
    );
  }
}
