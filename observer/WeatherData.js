'use strict';

import {Subject} from "./Subject";

export class WeatherData extends Subject {
  constructor() {
    super();

    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getPressure() {
    return this.pressure;
  }

  measurementsChanged() {
    this.notify({
      temperature: this.getTemperature(),
      humidity: this.getHumidity(),
      pressure: this.getPressure()
    });
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }

}