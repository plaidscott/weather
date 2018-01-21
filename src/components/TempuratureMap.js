import React, { Component } from 'react';

class TempuratureMap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    console.log('this.props in TempuratureMap', this.props);
    return (
      <div className="TempuratureMap">
        <div>hi there from TempuratureMap</div>
      </div>
    );
  }
}

export default TempuratureMap;
