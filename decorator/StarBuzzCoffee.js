import {Beverage} from "./Beverage";

import {Espresso} from "./Espresso";
import {HomeBlend} from "./HomeBlend";
import {DarkRoast} from "./DarkRoast";

import {Soy} from "./Soy";
import {Mocha} from "./Mocha";
import {Whip} from "./Whip";

export class StarBuzzCoffee {
  static run() {
    let beverage1 = new Espresso();
    let beverage2 = new HomeBlend();
    let beverage3 = new DarkRoast();

    /* Simple Espresso */
    this.coffeeCheck(beverage1);

    beverage2 = new Soy(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);

    /* Home blend coffee with soy, chocolate and whip */
    this.coffeeCheck(beverage2);

    beverage3 = new Mocha(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);

    /* Dark roast coffee with double mocha and whip */
    this.coffeeCheck(beverage3);
  }

  static coffeeCheck(beverage) {
    if (beverage instanceof Beverage) {
    console.log(`${beverage.getDescription()} price: $${beverage.cost().toFixed(2)}`);
    }
  }
}