'use strict';

import {Duck} from "./Duck";
import {Quack} from "./Quack";
import {Fly} from "./Fly";

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.setQuackBehavior = new Quack();
        this.setFlyBehavior = new Fly();
    }
}