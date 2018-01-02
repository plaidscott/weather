import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: []
    }
    this.buildForecastList = this.buildForecastList.bind(this);
  }

  buildForecastList() {
    console.log('in buildForecastList', this.props.forecast);
    var reducedForecasts = this.props.forecast.list.filter( (forecast, index) => index % 8 === 0);
    console.log('reducedForecasts', reducedForecasts);

    return reducedForecasts.map( (forecast, index) => {
      return (
        <Col sm={2} md={2} lg={2} xl={2} key={index}>
          <div className="Forecast">
            <p>{forecast.weather[0].icon}</p>
            <p>avg {Math.round(forecast.main.temp)}</p>
            <p>low {Math.round(forecast.main.temp_min)}</p>
            <p>high {Math.round(forecast.main.temp_max)}</p>
          </div>
        </Col>
      )
    })
    // this.setState({
    //   forecasts: builtForecasts
    // })
  }

  render() {
    console.log('forecast in forecast.js', this.props.forecast);
    return (
      <div>
        <h3>{this.props.forecast.city.name}</h3>
        {this.buildForecastList()}
      </div>
    );
  }
}

export default Forecast;
