import React, { Component } from 'react';
import '../styles/weather-form.scss';

const WeatherForm = (props) => {
  return (
    <div className='weather-form form-group'>
      <input
        type='text'
        className='weather-form__input form-control'
        placeholder='Enter city name'
        onChange={props.onCityUpdate} />

      <button
        type='button'
        className="weather-form__btn btn btn-success"
        onClick={props.onCitySubmission}>

        Get Weather
      </button>
    </div>
  );
};

export default WeatherForm;
