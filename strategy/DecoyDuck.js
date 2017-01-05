'use strict';

import {Duck} from "./Duck";
import {Squeak} from "./Squeak";

export class DecoyDuck extends Duck {
  constructor() {
    super();
    this.setQuackBehavior = new Squeak();
  }
}
