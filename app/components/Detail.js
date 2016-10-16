import React, { Component, PropTypes } from 'react';
import ForecastDay from './ForecastDay';

import '../styles/detail.scss';


const Detail = (props) => {
  return (
    <div className='forecast-detail'>
      <ForecastDay day={props.weather} />

      <div className='forecast-detail__info'>
        <span className='forecast-detail__text'>{props.city}</span>
        <span className='forecast-detail__text'>{props.weather.weather[0].description}</span>
        <span className='forecast-detail__text'>min temp: { parseInt(props.weather.temp.min) }º</span>
        <span className='forecast-detail__text'>max temp: { parseInt(props.weather.temp.max) }º</span>
        <span className='forecast-detail__text'>humidity: {props.weather.humidity}%</span>
      </div>
    </div>
  )
};

Detail.propTypes = {
  weather: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
}

export default Detail;
