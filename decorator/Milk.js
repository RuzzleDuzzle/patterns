import {CondimentDecorator} from "./CondimentDecorator";

export class Milk extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Milk';
  }

  cost() {
    return 0.20 + +this.beverage.cost();
  }
}