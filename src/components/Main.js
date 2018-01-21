import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
// import AirPollution from './AirPollution';
import UVIndex from './UVIndex.js';
import TempuratureMap from './TempuratureMap.js'

import api from '../utils/api';

import { Button, PageHeader, Jumbotron, FormGroup, FormControl, InputGroup, Col, Tabs, Tab, Row, Glyphicon, Image } from 'react-bootstrap';
import '../style/font-awesome-4.7.0/css/font-awesome.css';
import '../style/Main.css'
import initialState from './dummyData';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleMainTabSelect = this.handleMainTabSelect.bind(this);
    this.handleMapTabSelect = this.handleMapTabSelect.bind(this);
    this.handleGetCurrentWeather = this.handleGetCurrentWeather.bind(this);
    this.handleSearchValueInput = this.handleSearchValueInput.bind(this);
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
    this.handleGetForecast = this.handleGetForecast.bind(this);
    this.handleGetUV = this.handleGetUV.bind(this);
    this.handleGetUVForecast = this.handleGetUVForecast.bind(this);
    this.handleGetTemperatureMap = this.handleGetTemperatureMap.bind(this);
    this.ensureIconAlwaysDay = this.ensureIconAlwaysDay.bind(this);
  }

  handleMainTabSelect(key) {
    this.setState({ key });
  }
  handleMapTabSelect(mapKey) {
    this.setState({ mapKey });
  }
  ensureIconAlwaysDay(str) {
    let newString = str.replace('n', 'd')
    return newString
  }
  handleGetCurrentWeather() {
    api.getCurrentWeather(this.state.locationSearchValue, this.state.countryCode, this.state.unit)
      .then( response => {

        console.log('response in getCurrentWeather', response.weather[0].icon);
        this.setState({
          weatherData: response,
          key: 1,
          mapKey: 1,
          weatherImage: require(`../style/media/${this.ensureIconAlwaysDay(response.weather[0].icon)}.jpg`)
        })
      })
  }
  handleGetForecast() {
    api.getForecast(this.state.locationSearchValue, this.state.countryCode, this.state.unit)
      .then( response => {
        // console.log('response in handleGetForecast main.js', response );
        this.setState({
          forecast: response,
          key: 1,
          mapKey: 1
          })
      })
  }
  handleGetUV() {
    // console.log('this.state.weatherData.weather.coord', this.state.weatherData);
    api.getUV(this.state.weatherData.coord.lat, this.state.weatherData.coord.lon)
      .then( response => {
        // console.log('response in handleGetUV in Main', response);
        this.setState({
          uvIndex: response.value
        })
      })
  }
  handleGetUVForecast() {
    api.getUVForecast(this.state.weatherData.coord.lat, this.state.weatherData.coord.lon)
      .then( response => {
        console.log('uvForecast', response);
          this.setState({
            uvIndexForecast: response
          })
      });
  }
  handleGetTemperatureMap() {
    let today = new Date();
    api.getTempuratureMap(this.state.weatherData.coord.lat, this.state.weatherData.coord.lon)
      .then( response => {

      })
  }
  handleSearchValueInput(e) {
    this.setState({
      locationSearchValue: e.target.value
    })
  }
  handleLocationSearch(e) {
    e.preventDefault();

    if(e.keyCode === 13) {
      this.handleGetCurrentWeather();
      this.handleGetForecast();
      this.handleGetUV();

    }
  }
  componentDidMount() {
    this.handleGetCurrentWeather();
    this.handleGetForecast();
    this.handleGetUV();
    this.handleGetUVForecast();
    // this.handleGetTemperatureMap();
  }



  render() {

    return (
      <div className="MainWrapper">
        <div className="Main">
          <div>
            <PageHeader>The WeatherApp</PageHeader>
            <Col sm={10} md={10} lg={10} xl={10} className='col-md-offset-1'
              >
              <Jumbotron >
                <Row>
                  <Col sm={7} md={7} lg={7} xl={7} className='col-md-offset-3'>
                    <FormGroup bsSize="large">
                      <InputGroup>
                        <FormControl
                          placeholder="What's the weather in your city?"
                          autoFocus
                          type="text"
                          value={this.state.locationSearchValue}
                          onChange={this.handleSearchValueInput}
                          onKeyUp={this.handleLocationSearch}
                          ></FormControl>
                        <InputGroup.Addon>
                          <Button onClick={this.handleLocationSearch}><Glyphicon glyph='search'/></Button>
                        </InputGroup.Addon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='col-md-offset-4'>
                  <Col sm={6} md={6} lg={6} xl={6}>
                    <Tabs activeKey={this.state.key}  onSelect={this.handleMainTabSelect} id="mainTabs">
                      <Tab eventKey={1} title="Current weather" ><CurrentWeather
                        weatherData={this.state.weatherData}/>
                      </Tab>
                      <Tab eventKey={2} title="5-Day Forecast" ><Forecast
                        forecast={this.state.forecast}/>
                      </Tab>
                      <Tab eventKey={3} title="UV Index" ><UVIndex
                        uvIndex={this.state.uvIndex}
                        uvIndexForecast={this.state.uvIndexForecast}/>
                      </Tab>
                    </Tabs>
                  </Col>

                </Row>
                <div>
                  <Image src={this.state.weatherImage} rounded sm={8} md ={8} lg={8} xl={8} style={{ maxHeight: '400px'}}/>
                </div>
              </Jumbotron>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;


// <Col sm={5} md={5} lg={5} xl={5} >
//   <Tabs activeKey={this.state.mapKey} onSelect={this.handleMapTabSelect} id='mapTabs'>
//     <Tab eventKey={1} title="Temperature Map">
//       <TempuratureMap
//           weatherData={this.state.weatherData}
//         />
//     </Tab>
//     <Tab eventKey={2} title="Precipitation Map"></Tab>
//   </Tabs>
// </Col>
