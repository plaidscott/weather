import React, { Component } from 'react';


import {} from 'react-bootstrap';

class CurrentWeather extends Component {

  render() {
    console.log('this.props in currentWeather', this.props);
    return (
      <div className="CurrentWeather">
        <p>Showing current weather for {this.props.weatherData.name}</p>
        <p>{this.props.weatherData.weather[0].icon}</p>
        <p>current avg {Math.round(this.props.weatherData.main.temp)}</p>
        <p>current low for {Math.round(this.props.weatherData.main.temp_min)}</p>
        <p>current high for {Math.round(this.props.weatherData.main.temp_max)}</p>

      </div>
    );
  }
}

export default CurrentWeather;
