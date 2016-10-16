import React, { Component } from 'react';
import WeatherFormContainer from '../containers/WeatherFormContainer';
import '../styles/home.scss';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h1 className='home__title'>Enter a City</h1>

        <WeatherFormContainer />
      </div>
    );
  }
}

export default Home;
