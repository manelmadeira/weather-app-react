import React, { Component, PropTypes } from 'react';
import ForecastDay from './ForecastDay';

const ForecastGrid = (props) => {
  return (
    <div className='forecast-grid'>
      <h1 className='forecast-grid__city'>{props.city}</h1>
      <h2 className='forecast-grid__select'>Select a day</h2>
      <div className='forecast-grid__days'>
        {props.forecast.list.map((day) => {
          return (
            <ForecastDay
              key={day.dt}
              day={day}
              handleClick={props.handleClick.bind(null, day)} />
          )
        })}
      </div>
    </div>
  )
};

const Forecast = (props) => {
  if (props.isLoading) {
    return (
      <h1> Loading... </h1>
    )
  }

  return (
    <ForecastGrid
      city={props.city}
      forecast={props.forecastData}
      handleClick={props.handleClick} />
  );
};

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Forecast;
