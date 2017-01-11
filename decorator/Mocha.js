import {CondimentDecorator} from "./CondimentDecorator";

export class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost() {
    return 0.10 + +this.beverage.cost();
  }
}