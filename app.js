const chalk = require("chalk");
const geocode = require("./utils/geocode");
const weather = require("./utils/weather");

const address = process.argv[2];

if (!address) {
  console.log("Please provide a location");
} else {
  geocode(address, (err, { latitude, longitude, location }) => {
    if (err) {
      return console.log(err);
    }

    weather(latitude, longitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }
      console.log(chalk.green.inverse("Current Weather: "));
      console.log(location);
      console.log(forecastData);
    });
  });
}
