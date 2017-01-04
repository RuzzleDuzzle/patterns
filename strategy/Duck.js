'use strict';

export class Duck {
    quackBehavior;

    constructor() {
    }

    set setQuackBehavior(Quack) {
        if (Quack.quack) {
            this.quackBehavior = Quack;
        }
    }

    quack() {
        this.quackBehavior.quack();
    }
}