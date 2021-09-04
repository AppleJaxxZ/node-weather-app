const request = require("request");
const chalk = require("chalk");

const url =
  "http://api.weatherstack.com/current?access_key=53c1880e5a68383e75fc72c5fe8449ed&query=41.401119,27.372467&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service");
  } else if (response.body.error) {
    console.log("unable to find location.");
  } else {
    const data = response.body.current;
    console.log(
      `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out.  It feels like ${data.feelslike} degrees out. `
    );
  }
});

const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Philadelphia.json?access_token=pk.eyJ1IjoiYXBwbGVqYXh4eiIsImEiOiJja3Q0emNlZm8wM2hzMnZxd2xiemYwbGNxIn0.Ylc3Cbx0DIYAVwLilyJeOQ&limit=1";
request({ url: url2, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to Mapbox api and gather coordinates.");
  } else if (response.body.features.length === 0) {
    console.log("Please check your spelling or enter in a new location");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(
      chalk.green.inverse(`Latitude: ${latitude}, Longitude: ${longitude}`)
    );
  }
});
