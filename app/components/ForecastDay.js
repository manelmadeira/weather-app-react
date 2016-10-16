import React, { Component, PropTypes } from 'react';
import { getDate, getIconClass } from '../utils/utils';
import classNames from 'classnames';

import '../styles/forecast-day.scss';


const ForecastDay = (props) => {
  const date = getDate(props.day.dt);
  const iconClass = getIconClass(props.day.weather[0].id);

  const iconClassNames = classNames({
    'forecast-day__icon': true,
    [`${iconClass}`]: true,
  });

  return (
    <div className='forecast-day' onClick={props.handleClick} >
      <i className={iconClassNames}></i>
      <span className='forecast-day__weekday'>{date}</span>
    </div>
  )
};

ForecastDay.propTypes = {
  day: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
};

export default ForecastDay;
