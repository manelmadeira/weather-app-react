import React, { Component, PropTypes } from 'react';
import WeatherForm from '../components/WeatherForm';

class WeatherFormContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  state = {
    city: ''
  }

  constructor(props, context) {
    super(props, context);
  }

  handleCityUpdate = (e) => {
    this.setState({
      city: e.target.value
    });
  }

  handleCitySubmission = (e) => {
    e.preventDefault()

    this.context.router.push('/forecast/' + this.state.city)
  }

  render() {
    return (
      <WeatherForm
        onCityUpdate={this.handleCityUpdate}
        onCitySubmission={this.handleCitySubmission} />
    );
  }
}

export default WeatherFormContainer;
