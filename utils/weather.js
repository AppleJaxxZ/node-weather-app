const request = require("request");

const weather = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=53c1880e5a68383e75fc72c5fe8449ed&query=" +
    lat +
    "," +
    long +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("unable to find location.", undefined);
    } else {
      const data = body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out.  It feels like ${data.feelslike} degrees out. `
      );
    }
  });
};

module.exports = weather;
