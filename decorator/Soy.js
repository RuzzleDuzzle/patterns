import {CondimentDecorator} from "./CondimentDecorator";

export class Soy extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Soy';
  }

  cost() {
    return 0.15 + +this.beverage.cost();
  }
}
