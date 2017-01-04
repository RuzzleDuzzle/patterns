'use strict';

import {Duck} from "./Duck";
import {Quack} from "./Quack";

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.setQuackBehavior = new Quack();
    }
}