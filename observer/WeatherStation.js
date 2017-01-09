import {WeatherData} from "./WeatherData";
import {CurrentConditionsDisplay} from "./CurrentConditionsDisplay";

export class WeatherStation {
  constructor() {
    this.weatherData = new WeatherData();
    this.currentDisplay = new CurrentConditionsDisplay(this.weatherData);

  }

  run() {
    this.weatherData.setMeasurements(26, 67, 29.1);
    this.weatherData.setMeasurements(29, 71, 31.2);
    this.weatherData.setMeasurements(27, 69, 30.7);
  }
}