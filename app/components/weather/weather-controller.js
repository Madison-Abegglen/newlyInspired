import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function _drawWeather(wData) {
  console.log(`Weather Data:`, wData)
  let kTemp = wData.main.temp;
  let fTemp = Math.ceil((kTemp * (9 / 5)) - 459.67);
  let wIcon = ""
  if (wData.weather[0].main.toLowerCase() == "clear") {
    wIcon += `<i class="material-icons">wb_sunny</i>`
  }
  document.getElementById('weather').innerHTML = `<h4 class="w-icon">${wIcon}</h4><h4 class="weather-c">${wData.name} ${fTemp}°F<br />${wData.weather[0].main}</h4>`;
}

export default class WeatherController {

  constructor() {
    //this will fire off get weather right away
    this.getWeather()
  }
  getWeather() {
    weatherService.getWeather(_drawWeather)
  }
}
