import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import AirPollution from './AirPollution';
import UVIndex from './UVIndex.js';

import api from '../utils/api';

import { Button, PageHeader, Jumbotron, FormControl, Col, Tabs, Tab, Row } from 'react-bootstrap';
import '../style/font-awesome-4.7.0/css/font-awesome.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      mapKey: 1,
      locationSearchValue: "",
      countryCode: "usa",
      unit: 'imperial',
      weatherData: {
        name: 'New York',
        main: {
          temp: 70,
          temp_min: 60,
          temp_max: 80,
          humidity: 75
        },
        weather: [{
          description: "scattered clouds",
          icon: "03n"
        }]
      },
      forecast: {
        city: {
          name: "Los Angeles"
        },
        list: [
          {
            main: {
              temp: 70,
              temp_min: 60,
              temp_max: 80,
              humidity: 50
            },
            weather: [
              {
                description: "scattered clouds",
                icon: "02n"
              }
            ]
          }
        ],

      }
    }
    this.handleMainTabSelect = this.handleMainTabSelect.bind(this);
    this.handleMapTabSelect = this.handleMapTabSelect.bind(this);
    this.handleGetCurrentWeather = this.handleGetCurrentWeather.bind(this);
    this.handleSearchValueInput = this.handleSearchValueInput.bind(this);
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
    this.handleGetForecast = this.handleGetForecast.bind(this);
  }

  handleMainTabSelect(key) {
    this.setState({ key });
  }
  handleMapTabSelect(mapKey) {
    this.setState({ mapKey });
  }
  handleGetCurrentWeather() {
    api.getCurrentWeather(this.state.locationSearchValue, this.state.countryCode, this.state.unit)
      .then( response => {
        this.setState({
          weatherData: response,
          key: 1,
          mapKey: 1
        })
      })
  }
  handleGetForecast() {
    api.getForecast(this.state.locationSearchValue, this.state.countryCode, this.state.unit)
      .then( response => {
        console.log('response in handleGetForecast main.js', response );
        this.setState({
          forecast: response,
          key: 1,
          mapKey: 1
        })
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
    }
  }



  render() {

    return (
      <div className="Main">
        <PageHeader>The WeatherApp</PageHeader>
        <Col sm={10} md={10} lg={10} xl={10}>
          <Jumbotron >
            <Row>
              <Col sm={5} md={5} lg={5} xl={5}>
                <FormControl
                  placeholder="What's the weather in your city?"
                  autoFocus
                  type="text"
                  value={this.state.locationSearchValue}
                  onChange={this.handleSearchValueInput}
                  onKeyUp={this.handleLocationSearch}
                  ></FormControl>
                <Button onClick={this.handleGetCurrentWeather}><span className="fa fa-search"></span></Button>
              </Col>
            </Row>
            <Row>
              <Col sm={7} md={7} lg={7} xl={7}>
                <Tabs activeKey={this.state.key}  onSelect={this.handleMainTabSelect} id="mainTabs">
                  <Tab eventKey={1} title="Current weather"><CurrentWeather weatherData={this.state.weatherData}/></Tab>
                  <Tab eventKey={2} title="5-Day Forecast"><Forecast forecast={this.state.forecast}/></Tab>
                  <Tab eventKey={3} title="Air Pollution"><AirPollution/></Tab>
                  <Tab eventKey={4} title="UV Index"><UVIndex/></Tab>
                </Tabs>
              </Col>
              <Col sm={5} md={5} lg={5} xl={5} >
                <Tabs activeKey={this.state.mapKey} onSelect={this.handleMapTabSelect} id='mapTabs'>
                  <Tab eventKey={1} title="Temperature Map"></Tab>
                  <Tab eventKey={2} title="Precipitation Map"></Tab>
                </Tabs>
              </Col>
            </Row>
          </Jumbotron>
      </Col>
      </div>
    );
  }
}

export default Main;
