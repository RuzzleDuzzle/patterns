import {DisplayElement} from "./DisplayElement";

export class CurrentConditionsDisplay extends DisplayElement {
  constructor(subject) {
    super(subject);

    this.temperature = 0;
    this.humidity = 0;
  }

  update(options) {
    this.temperature = this.subject.getTemperature();
    this.humidity = this.subject.getHumidity();

    this.display();
  }

  display() {
    console.group();
    console.log('Current conditions: \n');
    console.log(`temperature: ${this.temperature}C`);
    console.log(`humidity: ${this.humidity}%`);
    console.groupEnd();
  }

}