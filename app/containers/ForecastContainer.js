import React, { Component, PropTypes } from 'react';
import Forecast from '../components/Forecast';
import openWeatherHelpers from '../utils/openWeatherHelpers';

import '../styles/forecast.scss';

class ForecastContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  state = {
    isLoading: true,
    forecastData: {},
  }

  componentDidMount = (e) => {
    const city = this.props.routeParams.city;

    this.requestApi(city);
  }

  componentWillReceiveProps = (newProps) => {
    // when searching again
    const city = newProps.routeParams.city;

    this.requestApi(city);
  }

  requestApi = (city) => {
    // fetch data from api
    openWeatherHelpers.getWeekForcast(city)
      .then((response) => {
        console.log(response);

        this.setState({
          isLoading: false,
          forecastData: response
        });
      });
  }

  handleClick = (weather) => {
    this.context.router.push({
      pathname: `/detail/${this.props.routeParams.city}`,
      state: {
        weather,
      },
    });
  }

  render() {
    return (
      <div className='forecast-container'>
        <Forecast
          isLoading={this.state.isLoading}
          forecastData={this.state.forecastData}
          city={this.props.routeParams.city}
          handleClick={this.handleClick} />
      </div>
    );
  }
}

export default ForecastContainer;
