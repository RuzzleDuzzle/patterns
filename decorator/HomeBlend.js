import {Beverage} from "./Beverage";

export class HomeBlend extends Beverage {
  constructor() {
    super();
    this.description = 'Home Blend Coffee';
  }

  cost() {
    return 1.50;
  }
}