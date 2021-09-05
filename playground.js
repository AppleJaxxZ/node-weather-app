const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=53c1880e5a68383e75fc72c5fe8449ed&query=40,-75&units=f";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An Errror", error);
});

request.end();
