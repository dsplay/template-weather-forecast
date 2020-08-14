var dsplay_config = {
  // config parameters
  locale: 'pt_BR',
  // Android SDK version
  osVersion: 19,
  // DSPLAY App version code
  appVersion: 99,
};

var dsplay_media = {
  duration: 30000,

  // for json service based media
  result: {
    "validity": "2020-12-13T18:22:55.238Z", "showOutdated": true, "data":
    {
      //Weather media parameters
      lang: "pt",
      weather: {
        city: "Auerbach in der Oberpfalz",
        country: "DS",
        current: {
          code: 800,
          description: "Thunderstorm with heavy drizzle",
          icon: "t04",
          humidity: 78,
          wind: 4.58,
          date: "2020-07-27",
          value: 23.00,
          temp: 23.00,
          min: 12.00,
          max: 27.00,
          sunrise: "05:00",
          sunset: "18:00"
        },
        forecast: [
          {
            code: 300,
            description: "clear sky",
            icon: "c01",
            humidity: 56,
            wind: 3.99,
            date: "2020-04-09",
            value: 29.21,
            min: 29.21,
            max: 33.21
          },
          {
            code: 300,
            description: "Few clouds",
            icon: "c02",
            humidity: 60,
            wind: 5.77,
            date: "2020-04-10",
            value: 29.52,
            min: 25.52,
            max: 31.52
          },
          {
            code: 800,
            description: "Unknown Precipitation",
            icon: "u00",
            humidity: 63,
            wind: 5.64,
            date: "2020-04-11",
            value: 28.11,
            min: 23.11,
            max: 28.11
          }
        ]
      }

    }

  },

};
