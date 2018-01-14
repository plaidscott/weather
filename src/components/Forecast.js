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
    var reducedForecasts = this.props.forecast.list.filter( (forecast, index) => index % 8 === 0);
    return reducedForecasts.map( (forecast, index) => {
      var condition = forecast.weather[0].icon;
      return (
        <Col sm={2} md={2} lg={2} xl={2} key={index}>
          <div className="Forecast">
            <p><img src={require(`../style/media/${condition}.png`)} alt="weather condition icon"></img></p>
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
    return (
      <div>
        <h3>{this.props.forecast.city.name}</h3>
        {this.buildForecastList()}
      </div>
    );
  }
}

export default Forecast;
