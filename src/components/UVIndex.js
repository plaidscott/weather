import React, { Component } from 'react';

import { AreaChart } from 'react-easy-chart';

class UVIndex extends Component {

  render() {

    return (
      <div className="UVIndex">
        <div>Todays UV Index: <strong>{this.props.uvIndex}</strong></div>
        {this.props.uvIndexForecast[0].date_iso}
          <AreaChart
            axes
            xType={'text'}
            width={450}
            height={200}
            interpolate={'cardinal'}
            yDomainRange={[1, 10]}
            areaColors={['blue']}
            data={[
              [
                { x: this.props.uvIndexForecast[0].date_iso.slice(7,10), y: this.props.uvIndexForecast[0].value},
                { x: this.props.uvIndexForecast[1].date_iso.slice(7,10), y: this.props.uvIndexForecast[1].value},
                { x: this.props.uvIndexForecast[2].date_iso.slice(7,10), y: this.props.uvIndexForecast[2].value},
                { x: this.props.uvIndexForecast[3].date_iso.slice(7,10), y: this.props.uvIndexForecast[3].value},
                { x: this.props.uvIndexForecast[4].date_iso.slice(7,10), y: this.props.uvIndexForecast[4].value},
                { x: this.props.uvIndexForecast[5].date_iso.slice(7,10), y: this.props.uvIndexForecast[5].value}
              ]
            ]}
          />
      </div>
    );
  }
}

export default UVIndex;
