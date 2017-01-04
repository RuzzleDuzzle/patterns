'use strict';

import {MallardDuck} from './MallardDuck';
import {Squeak} from "./Squeak";

let mallardDuck = new MallardDuck();

mallardDuck.quack();
mallardDuck.setQuackBehavior(new Squeak());
mallardDuck.quack();