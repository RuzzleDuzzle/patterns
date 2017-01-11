import {Beverage} from "./Beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'Dark Roast Coffee';
  }

  cost() {
    return 1.25;
  }
}