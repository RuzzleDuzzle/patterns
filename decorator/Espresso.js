import {Beverage} from "./Beverage";

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  cost() {
    return 1.15;
  }
}