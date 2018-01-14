import React, { Component } from 'react';


import {} from 'react-bootstrap';

class CurrentWeather extends Component {

  render() {
    return (
      <div className="CurrentWeather">
        <p>Showing current weather for {this.props.weatherData.name}</p>
        <p><img src={require(`../style/media/${this.props.weatherData.weather[0].icon}.png`)} alt="condition icon"></img></p>
        <p>current avg {Math.round(this.props.weatherData.main.temp)}</p>
        <p>current low for {Math.round(this.props.weatherData.main.temp_min)}</p>
        <p>current high for {Math.round(this.props.weatherData.main.temp_max)}</p>

      </div>
    );
  }
}

export default CurrentWeather;
