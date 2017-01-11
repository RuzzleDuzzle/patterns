import {CondimentDecorator} from "./CondimentDecorator";

export class Whip extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  cost() {
    return 0.10 + +this.beverage.cost();
  }
}