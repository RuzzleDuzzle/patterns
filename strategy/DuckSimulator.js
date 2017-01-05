'use strict';

import {MallardDuck} from './MallardDuck';
import {Squeak} from "./Squeak";
import {NoFly} from "./NoFly";

let mallardDuck = new MallardDuck();

export function runDuckSimulator() {
  mallardDuck.quack();
  mallardDuck.fly();
  mallardDuck.setQuackBehavior = new Squeak();
  mallardDuck.setFlyBehavior = new NoFly();
  mallardDuck.quack();
  mallardDuck.fly();
}

