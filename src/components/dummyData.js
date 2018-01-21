const blah = {
  key: 1,
  mapKey: 1,
  locationSearchValue: "New York",
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
    coord: {
      lon: -73.99,
      lat: 40.73
    },
    weather: [{
      description: "scattered clouds",
      icon: "03d"
    }]
  },
  forecast: {
    city: {
      name: "New York"
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

  },
  uvIndex: 1,
  uvIndexForecast: [
    {date_iso: 'abcdefghijklmnop'},
    {date_iso: 'abcdefghijklmnop'},
    {date_iso: 'abcdefghijklmnop'},
    {date_iso: 'abcdefghijklmnop'},
    {date_iso: 'abcdefghijklmnop'},
    {date_iso: 'abcdefghijklmnop'},
    {date_iso: 'abcdefghijklmnop'}
  ]
}
export default blah;
